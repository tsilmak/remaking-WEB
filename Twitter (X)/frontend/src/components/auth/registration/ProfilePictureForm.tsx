import Navigation from "@/hooks/Navigation";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Modal from "@/components/common/Modal";
import Button from "@/components/form/Button";
import ImagePositionEditor from "@/components/common/ImagePositionEditor";

interface ImagePosition {
  x: number;
  y: number;
  scale: number;
}

export const ProfilePictureFormModal: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPositioning, setIsPositioning] = useState(false);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (!isPositioning) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTempImage(imageUrl);
      setIsPositioning(true);
    }
  };

  const handleApplyPosition = (imageUrl: string, position: ImagePosition) => {
    setSelectedImage(imageUrl);
    setIsPositioning(false);
    setTempImage(null);
  };

  const handleCancelPosition = () => {
    setIsPositioning(false);
    setTempImage(null);
  };

  return (
    <div className="flex justify-center min-h-screen dark:bg-black">
      <div className="sm:flex max-w-screen-xl w-full relative">
        <Navigation />
        <div className="absolute inset-0 dark:bg-black/50 bg-black/40 transition-colors duration-300" />
        <main className="w-full flex items-center justify-center relative z-10">
          <Modal
            isModal={true}
            onClose={() => {}}
            showCloseButton={false}
            contentClassName="px-8 overflow-y-auto"
            footer={
              <Button
                onClick={() => console.log("Hhh")}
                variant="primary"
                size="large"
                disabled={false}
              >
                Skip for now
              </Button>
            }
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              Pick a profile picture
            </h1>
            <p className="leading-[0px] text-textSecondary">
              Have a favorite selfie? Upload it now.
            </p>
            <div className="flex justify-center items-center ">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"
                className="hidden"
              />
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Profile picture"
                  onClick={handleImageClick}
                  className="w-44 h-44 rounded-full my-24 cursor-pointer hover:opacity-80 border-borderColor border-2 object-cover"
                />
              ) : (
                <Image
                  src="/Twitter_default_profile_400x400.png"
                  alt="Profile picture"
                  width={176}
                  height={176}
                  onClick={handleImageClick}
                  className="rounded-full my-24 cursor-pointer hover:opacity-80 border-borderColor border-2"
                />
              )}
            </div>
          </Modal>
        </main>
      </div>

      {/* Image Positioning Editor */}
      {isPositioning && tempImage && (
        <ImagePositionEditor
          imageUrl={tempImage}
          onApply={handleApplyPosition}
          onCancel={handleCancelPosition}
        />
      )}
    </div>
  );
};

export const ProfilePictureFormNonModal: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPositioning, setIsPositioning] = useState(false);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (!isPositioning) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setTempImage(imageUrl);
      setIsPositioning(true);
    }
  };

  const handleApplyPosition = (imageUrl: string, position: ImagePosition) => {
    setSelectedImage(imageUrl);
    setIsPositioning(false);
    setTempImage(null);
  };

  const handleCancelPosition = () => {
    setIsPositioning(false);
    setTempImage(null);
  };

  return (
    <div className="flex justify-center min-h-screen dark:bg-black">
      <div
        className={`z-20 absolute inset-0 ${"dark:bg-black/55 bg-white"} transition-colors duration-300`}
      />
      <div className="z-30 sm:flex max-w-screen-xl w-full relative">
        <main className="w-full flex items-center justify-center relative z-10 mr-24">
          <Modal
            isModal={false}
            onClose={() => {}}
            showCloseButton={false}
            contentClassName="px-8 overflow-y-auto"
            footer={
              <Button
                onClick={() => console.log("Hhh")}
                variant="primary"
                size="large"
                disabled={false}
              >
                Skip for now
              </Button>
            }
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-6  ">
              Pick a profile picture
            </h1>
            <p className="leading-[0px] text-textSecondary">
              Have a favorite selfie? Upload it now.
            </p>
            <div className="flex justify-center items-center ">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"
                className="hidden"
              />
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Profile picture"
                  onClick={handleImageClick}
                  className="w-44 h-44 rounded-full my-24 cursor-pointer hover:opacity-80 border-borderColor border-2 object-cover"
                />
              ) : (
                <Image
                  src="/Twitter_default_profile_400x400.png"
                  alt="Profile picture"
                  width={176}
                  height={176}
                  onClick={handleImageClick}
                  className="rounded-full my-24 cursor-pointer hover:opacity-80 border-borderColor border-2"
                />
              )}
            </div>
          </Modal>
        </main>
      </div>

      {/* Image Positioning Editor */}
      {isPositioning && tempImage && (
        <ImagePositionEditor
          imageUrl={tempImage}
          onApply={handleApplyPosition}
          onCancel={handleCancelPosition}
        />
      )}
    </div>
  );
};
