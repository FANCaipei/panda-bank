import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { nanoid } from "nanoid";

const ProductSettingModal = ({
  onInit,
  productType /* deposit | financial */,
  productData,
  onUpdateOrCreated,
  onDelete,
}) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [editProductData, setEditProductData] = useState({});
  const [productDurUnits] = useState([
    {
      label: t("bankSetting:TEXT_DUR_UNIT_MONTH"),
      value: "month",
    },
  ]);
  const [intInputValidateController, setIntInputValidateController] = useState({
    isInvalid: false,
    validate: (value) => {
      const reg = /^[0-9]+$/g;
      if (reg.test(`${value}`)) {
        return null;
      }
      return [t("bankSetting:ERROR_INT_VALIDATOR")];
    },
    errorMessage: null,
  });

  const onDurInputChange = useCallback(
    (value) => {
      const errMsg = intInputValidateController.validate(value);
      console.log(errMsg);
      console.log(!errMsg);
      const newController = {
        isInvalid: !!errMsg,
        errorMessage: errMsg,
        validate: intInputValidateController.validate,
      };
      setIntInputValidateController(newController);
      setEditProductData({
        ...editProductData,
        dur: value,
      });
    },
    [intInputValidateController, editProductData]
  );

  const onInterestChange = useCallback(
    (value) => {
      setEditProductData({
        ...editProductData,
        interest: value,
      });
    },
    [editProductData]
  );

  const editOrCreateProduct = useCallback(() => {
    if (!editProductData.id) {
      // TODO: new product, create query
      editProductData.id = nanoid(); // delete it
    } else {
      // TODO: update product
    }
    onUpdateOrCreated(productType, editProductData);

    onClose();
  }, [onClose, onUpdateOrCreated, productType, editProductData]);
  const deleteProduct = useCallback(() => {
    onDelete(productType, editProductData.id);
    onClose();
  }, [onClose, productType, onDelete, editProductData]);

  useEffect(() => {
    if (productData) {
      setEditProductData(JSON.parse(JSON.stringify(productData ?? "{}")));
    } else {
      setEditProductData({});
    }
  }, [productData]);

  useEffect(() => {
    onInit?.(isOpen, onOpen, onClose, onOpenChange);
  }, [isOpen, onOpen, onClose, onOpenChange, onInit]);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement='bottom-center'
      hideCloseButton={true}
    >
      <ModalContent>
        <>
          <ModalBody>
            <div className='pt-3'>
              {productType === "deposit" ? (
                <>
                  <div className='flex items-start pb-3'>
                    <Input
                      autoFocus
                      type='number'
                      value={editProductData?.dur}
                      isRequired
                      label=''
                      placeholder={t("bankSetting:TEXT_TERM")}
                      size='lg'
                      onValueChange={onDurInputChange}
                      isInvalid={intInputValidateController.isInvalid}
                      errorMessage={intInputValidateController.errorMessage}
                    />
                    <Select
                      isDisabled
                      className='ml-3 w-1/2'
                      label=''
                      selectedKeys={[productData?.unit ?? "month"]}
                      selectionMode='single'
                      size='lg'
                    >
                      {productDurUnits.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                  <Input
                    type='number'
                    value={editProductData?.interest}
                    isRequired
                    label=''
                    placeholder={t("bankSetting:TEXT_TERM_INTEREST")}
                    onValueChange={onInterestChange}
                    endContent={
                      <div className='pointer-events-none flex items-center'>
                        <span className='text-default-400 text-base'>%</span>
                      </div>
                    }
                    size='lg'
                  />
                </>
              ) : (
                <></>
              )}
              {productType === "financial" ? <></> : <></>}
            </div>
          </ModalBody>
          <ModalFooter>
            <div>
              {editProductData.id ? (
                <Button
                  variant='faded'
                  onPress={deleteProduct}
                  className='border-none text-red-500 mr-5'
                >
                  Delete
                </Button>
              ) : (
                <></>
              )}

              <Button
                color='primary'
                variant='solid'
                onPress={editOrCreateProduct}
              >
                {editProductData.id ? "Update" : "Create"}
              </Button>
            </div>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default ProductSettingModal;
