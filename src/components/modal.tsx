import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import {
  Modal as HeroUIModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TFunction } from "i18next";
import { Alert } from "@heroui/alert";

export const getMemeSchema = (t: TFunction) =>
  z.object({
    id: z.coerce
      .number({ invalid_type_error: t("validations.number.type") })
      .positive(t("validations.number.positive")),
    name: z
      .string({ message: t("validations.required") })
      .min(3, t("validations.string.min", { min: 3 }))
      .max(50, t("validations.string.max", { max: 100 })),
    image: z
      .string({ message: t("validations.required") })
      .url(t("validations.url"))
      .regex(/\.(jpe?g)$/i, t("validations.image.format"))
      .max(1000, t("validations.string.max", { max: 1000 })),
    likes: z.coerce
      .number({
        required_error: t("validations.required"),
        invalid_type_error: t("validations.number.type"),
      })
      .int(t("validations.number.int"))
      .min(0, t("validations.number.min", { min: 0 }))
      .max(99, t("validations.number.max", { max: 99 })),
  });

export interface IMeme {
  id: number;
  image: string;
  name: string;
  likes: number;
}

interface IModal {
  selectedMeme: IMeme | null;
  onModalClose: () => void;
  onFormSubmit: (updatedMeme: IMeme) => void;
}

export const Modal: React.FC<IModal> = ({
  selectedMeme,
  onModalClose,
  onFormSubmit,
}) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onOpenChange, getDisclosureProps } = useDisclosure();
  const [showSuccess, setShowSuccess] = useState(false);

  const memeSchema = useMemo(() => getMemeSchema(t), [t]);

  type MemeFormData = z.infer<typeof memeSchema>;

  // open modal when selected changed
  useEffect(() => {
    selectedMeme && onOpen();
  }, [selectedMeme]);

  // remove selected from the state
  useEffect(() => {
    getDisclosureProps().hidden && onModalClose();
  }, [getDisclosureProps()]);

  const {
    register,
    handleSubmit,
    reset,
    // getValues,
    formState: { errors },
  } = useForm<MemeFormData>({
    defaultValues: selectedMeme || {},
    resolver: zodResolver(memeSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    if (selectedMeme) {
      reset(selectedMeme);
    }
  }, [selectedMeme, reset]);

  const onSubmit = (formData: IMeme) => {
    onFormSubmit(formData);
    onOpenChange();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <>
      {showSuccess && (
        <Alert
          // className="fixed bottom-4 left-4 right-14 z-50 xs:w-fit"
          className="fixed z-50 w-fit max-w-[90%] px-4 py-2 rounded-xl shadow-lg
          inset-x-1/2 top-4 translate-x-[-50%]
          sm:inset-x-auto sm:top-auto sm:bottom-4 sm:right-4 sm:translate-x-0 text-nowrap"
          color="success"
          isVisible={showSuccess}
          onClose={() => setShowSuccess(false)}
        >
          {t("modal.success")}
        </Alert>
      )}
      <HeroUIModal
        // backdrop="blur"
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="m-4">
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">
                {t("modal.title")}
                {/* #{getValues("id")} */}
              </ModalHeader>
              <ModalBody>
                {/* <div className="flex gap-2">
                  <Input
                    {...register("id")}
                    isReadOnly
                    errorMessage={errors.id?.message}
                    isInvalid={!!errors.id}
                    label={t("modal.properties.id.title")}
                    placeholder={t("modal.properties.id.placeholder")}
                    type="number"
                    variant="bordered"
                  />
                  <Input
                    {...register("likes")}
                    errorMessage={errors.likes?.message}
                    isInvalid={!!errors.likes}
                    label={t("modal.properties.likes.title")}
                    placeholder={t("modal.properties.likes.placeholder")}
                    type="number"
                    variant="bordered"
                  />
                </div> */}
                <Input
                  {...register("name")}
                  errorMessage={errors.name?.message}
                  isInvalid={!!errors.name}
                  label={t("modal.properties.name.title")}
                  placeholder={t("modal.properties.name.placeholder")}
                  variant="bordered"
                />
                <Input
                  {...register("image")}
                  errorMessage={errors.image?.message}
                  isInvalid={!!errors.image}
                  label={t("modal.properties.image.title")}
                  placeholder={t("modal.properties.image.placeholder")}
                  variant="bordered"
                />
                <Input
                  {...register("likes", { valueAsNumber: true })}
                  errorMessage={errors.likes?.message}
                  isInvalid={!!errors.likes}
                  label={t("modal.properties.likes.title")}
                  placeholder={t("modal.properties.likes.placeholder")}
                  type="number"
                  variant="bordered"
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="bordered"
                  onPress={() => {
                    onClose();
                    // onModalClose();
                  }}
                >
                  {t("modal.cancel")}
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  //   onPress={() => {
                  // onClose();
                  // onModalClose();
                  //   }}
                >
                  {t("modal.save")}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </HeroUIModal>
    </>
  );
};
