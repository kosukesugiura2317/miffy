"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { Box3, Vector3 } from "three";
import type { Group } from "three";
import { useStart } from "@/components/StartGate";

type MiffySceneProps = {
  modelPath?: string;
};

type MiffyModelProps = {
  modelPath?: string;
  onReady?: () => void;
};

type MessageControllerProps = {
  messages: string[];
  onChange: (index: number) => void;
};

function MessageController({ messages, onChange }: MessageControllerProps) {
  const currentIndex = useRef(0);
  useFrame(({ pointer }) => {
    const normalized = Math.min(Math.max((pointer.x + 1) / 2, 0), 0.999);
    const nextIndex = Math.floor(normalized * messages.length);
    if (nextIndex !== currentIndex.current) {
      currentIndex.current = nextIndex;
      onChange(nextIndex);
    }
  });
  return null;
}

function MiffyModel({
  modelPath = "/models/miffy.glb",
  onReady,
}: MiffyModelProps) {
  const group = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);
  const { camera } = useThree();

  useFrame(({ pointer }) => {
    if (!group.current) return;
    const clampedY = Math.max(Math.min(pointer.y, 0.9), -0.7);
    const clampedX = Math.max(Math.min(pointer.x, 0.9), -0.9);
    const targetX = clampedY * 0.55;
    const targetY = clampedX * 0.85;
    const time = performance.now() * 0.001;
    const autoY = time * 0.6;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.14;
    group.current.rotation.y +=
      ((autoY + targetY) - group.current.rotation.y) * 0.16;
    group.current.position.y = Math.sin(time * 1.2) * 0.04;
  });

  useEffect(() => {
    if (!group.current) return;
    const box = new Box3().setFromObject(scene);
    const size = new Vector3();
    box.getSize(size);
    const maxAxis = Math.max(size.x, size.y, size.z) || 1;
    const scale = 1.8 / maxAxis;
    scene.scale.setScalar(scale);
    box.setFromObject(scene);
    const center = new Vector3();
    box.getCenter(center);
    const bodyBias = size.y * 0.26;
    scene.position.set(-center.x, -center.y + bodyBias, -center.z);
    camera.position.set(0, 1.8, 3.4);
    camera.lookAt(0, 1.0, 0);
    onReady?.();
  }, [scene, camera]);

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

export default function MiffyScene({ modelPath }: MiffySceneProps) {
  const [loaded, setLoaded] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { started } = useStart();
  const messages = [
    "ミッフィーは、公共文化の案内役です。",
    "世界中の都市が、物語の舞台になりました。",
    "子どもと大人が一緒に未来を考える場所。",
    "共有は自由、でも対話が必要です。",
  ];

  useEffect(() => {
    if (!started) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.6;
    const playAttempt = audio.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => {
        // Autoplay can fail; Start button still counts as gesture in most browsers.
      });
    }
  }, [started]);

  return (
    <div className="relative h-[100svh] w-full overflow-hidden bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/miffy-bg.jpg)" }}
        aria-hidden
      />
      <Canvas
        camera={{ position: [0, 1.2, 3.4], fov: 42 }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 5, 2]} intensity={1.1} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.95, 0]}>
          <circleGeometry args={[1.2, 64]} />
          <meshStandardMaterial color="#e7f6ff" />
        </mesh>
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <MiffyModel modelPath={modelPath} onReady={() => setLoaded(true)} />
        </Suspense>
        <MessageController messages={messages} onChange={setMessageIndex} />
      </Canvas>
      <div
        className={`pointer-events-none absolute inset-0 flex items-center justify-center text-xs text-muted transition-opacity ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden={loaded}
      >
        3Dモデルを読み込み中...
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-10 mx-auto flex max-w-3xl justify-center px-6 text-center">
        <p className="font-rounded rounded-full border-2 border-line bg-white/80 px-5 py-3 text-base font-semibold">
          {messages[messageIndex]}
        </p>
      </div>
      <audio ref={audioRef} src="/audio/theme.mp3" loop playsInline />
    </div>
  );
}

useGLTF.preload("/models/miffy.glb");
