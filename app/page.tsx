'use client';
// import { useStore } from '@/store/use-store';

export default function Home() {
  // const bears = useStore((state) => state.bears);

  return (
    <>
      <main className="container mx-auto flex flex-col gap-16">랜딩 페이지 / 홈 페이지</main>
      {/* {bears} around here... */}
      <br />
      {/* <Controls /> */}
    </>
  );
}

// function Controls() {
// const increasePopulation = useStore((state) => state.increasePopulation);
// return <button onClick={increasePopulation}>one up</button>;
// }
