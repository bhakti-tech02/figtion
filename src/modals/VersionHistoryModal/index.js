import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Line, Input } from "components";

const VersionHistoryModalModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] w-[42%]"
        overlayClassName="bg-black_900_7f fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="m-[auto] max-h-[97vh] overflow-y-auto">
          <Column
            className="bg-white_A700 lg:p-[30px] xl:p-[34px] 2xl:p-[39px] 3xl:p-[46px] rounded-radius5 w-[100%]"
            compid="5470:11883"
            comptype="Column"
          >
            <Row
              className="justify-between 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] w-[95%]"
              compid="5470:11911"
              comptype="Row"
            >
              <Text
                className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]"
                compid="5470:11912"
                comptype="Text"
              >
                Version History
              </Text>
              <Img
                src="images/img_close_16X16.svg"
                className="common-pointer lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] mt-[1px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                compid="5470:11914"
                comptype="Image"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Line
              className="bg-gray_401 h-[0.5px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[96%]"
              compid="5470:11886"
              comptype="Line"
            />
            <Text
              className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]"
              compid="5470:11889"
              comptype="Text"
            >
              Last Update
            </Text>
            <Input
              className="font-normal p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-black_900 text-black_900 w-[100%]"
              wrapClassName="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] mt-[4px] w-[96%] xl:ml-[8px]"
              compid="5470:11890"
              comptype="EditText"
              name="time"
              placeholder="11:54 AM"
              variant="OutlineGray4011_2"
            ></Input>
            <Text
              className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]"
              compid="5470:11894"
              comptype="Text"
            >
              Designer
            </Text>
            <Input
              className="font-normal p-[0] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] placeholder:text-black_900 text-black_900 w-[100%]"
              wrapClassName="2xl:ml-[10px] 3xl:ml-[12px] flex lg:ml-[7px] mt-[4px] w-[96%] xl:ml-[8px]"
              compid="5470:11895"
              comptype="EditText"
              name="GroupTwentyFour"
              placeholder="Dhiwise Design Team"
              prefix={
                <Img
                  src="images/img_user.svg"
                  className="mr-[3px] border-blue_500 border border-solid bg-blue_500 lg:w-[13px] lg:ml-[7px] xl:w-[15px] xl:ml-[8px] 2xl:w-[17px] 2xl:ml-[9px] 3xl:w-[20px] 3xl:ml-[10px] rounded-radius12 my-[auto]"
                  compid="5470:11899"
                  comptype="Image"
                  alt="user"
                />
              }
              size="md"
              variant="OutlineGray4011_2"
            ></Input>
            <Row
              className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] pt-[1px] w-[96%]"
              compid="5470:11901"
              comptype="Row"
            >
              <Text
                className="font-normal mb-[1px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_700 w-[auto]"
                compid="5470:11902"
                comptype="Text"
              >
                URL
              </Text>
              <Img
                src="images/img_vector.svg"
                className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] lg:ml-[291px] xl:ml-[333px] 2xl:ml-[375px] 3xl:ml-[450px] mt-[1px] lg:w-[10px] xl:w-[12px] 2xl:w-[14px] 3xl:w-[16px]"
                compid="5470:11905"
                comptype="Image"
                alt="Vector"
              />
              <Text
                className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[2px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-blue_500 w-[auto]"
                compid="5470:11906"
                comptype="Text"
              >
                Copy Link
              </Text>
            </Row>
            <Column
              className="bg-gray_100 border border-gray_401 border-solid items-center 2xl:mb-[10px] 3xl:mb-[12px] lg:mb-[7px] xl:mb-[8px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius5 w-[96%]"
              compid="5470:11907"
              comptype="Column"
            >
              <Text
                className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] my-[2px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[99%]"
                compid="5470:11910"
                comptype="Text"
              >
                https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fyl2buEyxoYhMxon3ZmalTe%2FHand-draw%25E2%2580%25A8n-arrows-(Community)%3Fnode-id%3D0%253A1
              </Text>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default VersionHistoryModalModal;
