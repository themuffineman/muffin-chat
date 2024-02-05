import CreateForm from "@/components/CreateForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-16 p-24">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-6xl tracking-tight font-extrabold ">Welcome To Muffin Chat🧁</h1>
        <p className=" text-gray-600 text-xl">Chat with your friends and family</p>
      </div>
      <>
        <CreateForm/>
      </>  
    </main>
  );
}
