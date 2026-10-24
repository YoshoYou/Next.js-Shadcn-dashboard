import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularContent = [
  {
    id: 1,
    title: "JavaScript",
    badge: "coding",
    image: "/images/image-1.jpg",
    count: 2433,
  },
  {
    id: 2,
    title: "Tech Trends 2026",
    badge: "Tech",
    image: "/images/image-2.jpg",
    count: 3928,
  },
  {
    id: 3,
    title: "The Future of AI",
    badge: "AI",
    image: "/images/image-3.jpg",
    count: 9843,
  },
  {
    id: 4,
    title: "React hooks explorer",
    badge: "React",
    image: "/images/image-4.jpg",
    count: 7633,
  },
];

const theLatestTransaction = [
  {
    id: 1,
    title: "Python",
    badge: "coding",
    image: "/images/image-5.jpg",
    count: 1290,
  },
  {
    id: 2,
    title: "UI/UX Design",
    badge: "Designing",
    image: "/images/image-6.jpg",
    count: 3928,
  },
  {
    id: 3,
    title: "Data Analytics",
    badge: "Data",
    image: "/images/image-1.jpg",
    count: 7600,
  },
  {
    id: 4,
    title: "Deep Learning",
    badge: "AI",
    image: "/images/image-3.jpg",
    count: 500,
  },
];
const CardList = ({ title }: { title: string }) => {
  const List =
    title === "Popular Content" ? popularContent : theLatestTransaction;
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <div className="flex flex-col gap-2">
        {List.map((item) => (
          <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
            <div className="w-12 h-12 rounded-sm relative overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="flex-1 p-0">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <Badge variant="secondary">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="p-0">
                {item.count / 1000}K
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;
