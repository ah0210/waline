const isImage = (item: DataTransferItem): boolean => item.type.includes('image');

export const getImageFromDataTransfer = (items: DataTransferItemList): File | null => {
  const image = [...items].find(isImage);

  return image ? image.getAsFile() : null;
};
