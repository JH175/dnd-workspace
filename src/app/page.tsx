import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="p-5 border-b">
        <h1>Header</h1>
      </header>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row justify-center max-w-6xl flex-grow w-full h-full p-5 gap-5">
          <div className="w-1/2 flex flex-col items-center border-r">
            <div className="sticky top-2">
              <span>Panel 1 - Fixed Content (sticky, no dnd)</span>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-5">
            <span>Panel 2 - Lists & Cards (dnd - reorder vertically)</span>
            <div
              id="list1"
              className="flex-col flex gap-5 border p-5 rounded-xl"
            >
              <p>List 1</p>
              <Card
                id="card1"
                className="h-64 w-full flex items-center justify-center bg-muted-foreground"
              >
                Card Content / Props
              </Card>
              <Card
                id="card2"
                className="h-64 w-full flex items-center justify-center bg-muted-foreground"
              >
                Card Content / Props
              </Card>
            </div>
            <div
              id="list2"
              className="flex-col flex gap-5 border p-5 rounded-xl"
            >
              <p>List 2</p>
              <Card
                id="card3"
                className="h-64 w-full flex items-center justify-center bg-muted-foreground"
              >
                Card Content / Props
              </Card>
              <Card
                id="card4"
                className="h-64 w-full flex items-center justify-center bg-muted-foreground"
              >
                Card Content / Props
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
