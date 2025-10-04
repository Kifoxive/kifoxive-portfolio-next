import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export interface IMeme {
  id: number;
  name: string;
  image: string;
  likes: number;
}

interface MemeListProps {
  memes: IMeme[];
}

export const MemeList: React.FC<MemeListProps> = ({ memes }) => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {memes.map(({ image, ...meme }) => {
        return (
          <Card key={meme.id} shadow="sm">
            <CardHeader className="flex justify-center">
              <Image
                alt={meme.name}
                className="rounded-xl object-cover aspect-[4/3]"
                // height={200}
                src={image}
                // width={300}
              />
            </CardHeader>
            <CardBody className="max-w-fit">
              <h3 className="font-semibold text-lg truncate">{meme.name}</h3>
              <p className="flex items-center gap-1 text-sm text-gray-600 max-w-fit">
                <Heart className="w-4 h-4 text-red-500" fill="#ef4444" />
                {meme.likes}
              </p>
            </CardBody>
            <CardFooter>
              <Link
                className="text-blue-500 hover:underline text-sm"
                href={image}
                rel="noopener noreferrer"
                target="_blank"
              >
                {t("list.view")}
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};
