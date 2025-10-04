import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Tooltip } from "@heroui/tooltip";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/button";
import { useEffect, useState } from "react";

import { EditIcon } from "./icons";
import { IMeme, Modal } from "./modal";
import { CopyCell } from "./CopyCell";

const tableColumns = ["id", "name", "image", "likes", "actions"] as const;

interface MemeTableProps {
  memes: IMeme[];
}

export const MemeTable: React.FC<MemeTableProps> = ({ memes }) => {
  const { t } = useTranslation();

  const [tableData, setTableData] = useState<IMeme[]>(memes);
  const [selectedMeme, setSelectedMeme] = useState<IMeme | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("memes");

    if (stored) {
      const parsed: IMeme[] = JSON.parse(stored);

      setTableData(parsed);
    }
  }, []);

  return (
    <>
      {
        <Modal
          selectedMeme={selectedMeme}
          onFormSubmit={(updatedMeme) => {
            const updatedMemes = tableData.map((meme: IMeme) =>
              meme.id === updatedMeme.id ? updatedMeme : meme
            );

            localStorage.setItem("memes", JSON.stringify(updatedMemes));
            setTableData(updatedMemes);
          }}
          onModalClose={() => setSelectedMeme(null)}
        />
      }
      <Table aria-label="Example static collection table">
        <TableHeader>
          {tableColumns.map((item) => (
            <TableColumn
              key={item}
              align={["actions", "likes"].includes(item) ? "center" : "start"}
            >
              {t(`table.columns.${item}`)}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {tableData.map((meme) => {
            const { id, name, image, likes } = meme;

            return (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>
                <TableCell className="whitespace-nowrap">{name}</TableCell>
                <TableCell>
                  <CopyCell text={image} />
                </TableCell>
                <TableCell>{likes}</TableCell>
                <TableCell>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="bordered"
                    onPress={() => setSelectedMeme(meme)}
                  >
                    <Tooltip content={t("table.edit")}>
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EditIcon />
                      </span>
                    </Tooltip>
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
