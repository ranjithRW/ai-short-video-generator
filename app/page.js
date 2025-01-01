import { UserButton } from "@clerk/nextjs";
import  { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen gap-4">
      
      <Button variant="destructive">Wolf</Button>
      <UserButton />
    </div>
  );
}
