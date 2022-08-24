import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, Line, Button } from "components";

const CommentPopupModal = (props) => {
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
            className="bg-white_A700 lg:p-[28px] xl:p-[32px] 2xl:p-[37px] 3xl:p-[44px] rounded-radius5 w-[100%]"
            compid="5122:11306"
            comptype="Column"
          >
            <Row
              className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] w-[94%]"
              compid="5122:11278"
              comptype="Row"
            >
              <Text
                className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]"
                compid="5122:11279"
                comptype="Text"
              >
                Comments
              </Text>
              <Img
                src="images/img_close_16X16.svg"
                className="common-pointer lg:h-[13px] xl:h-[15px] 2xl:h-[17px] 3xl:h-[20px] lg:w-[12px] xl:w-[14px] 2xl:w-[16px] 3xl:w-[19px]"
                compid="5122:11281"
                comptype="Image"
                onClick={props.onRequestClose}
                alt="close"
              />
            </Row>
            <Line
              className="bg-gray_401 h-[0.5px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[95%]"
              compid="5122:11253"
              comptype="Line"
            />
            <Row
              className="items-end xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[56%]"
              compid="5122:11288"
              comptype="Row"
            >
              <Button
                className="flex lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                compid="5122:11282"
                comptype="IconButton"
              >
                <Img
                  src="images/img_user.svg"
                  className="flex items-center justify-center"
                  alt="user"
                />
              </Button>
              <Text
                className="font-normal lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]"
                compid="5122:11284"
                comptype="Text"
              >
                Dhiwise Design Team
              </Text>
              <Text
                className="font-normal lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]"
                compid="5122:11286"
                comptype="Text"
              >
                7:45 PM
              </Text>
            </Row>
            <Text
              className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:ml-[43px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[79%]"
              compid="5122:11285"
              comptype="Text"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cras
              proin vitae ornare ut senectus.
            </Text>
            <Row
              className="items-end xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[56%]"
              compid="5122:11292"
              comptype="Row"
            >
              <Button
                className="flex lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                compid="5122:11293"
                comptype="IconButton"
              >
                <Img
                  src="images/img_user.svg"
                  className="flex items-center justify-center"
                  alt="user One"
                />
              </Button>
              <Text
                className="font-normal lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]"
                compid="5122:11295"
                comptype="Text"
              >
                Dhiwise Design Team
              </Text>
              <Text
                className="font-normal lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]"
                compid="5122:11296"
                comptype="Text"
              >
                7:45 PM
              </Text>
            </Row>
            <Text
              className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:ml-[43px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[79%]"
              compid="5122:11291"
              comptype="Text"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cras
              proin vitae ornare ut senectus.
            </Text>
            <Row
              className="items-end xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[56%]"
              compid="5122:11299"
              comptype="Row"
            >
              <Button
                className="flex lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                compid="5122:11300"
                comptype="IconButton"
              >
                <Img
                  src="images/img_user.svg"
                  className="flex items-center justify-center"
                  alt="user Two"
                />
              </Button>
              <Text
                className="font-normal lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]"
                compid="5122:11302"
                comptype="Text"
              >
                Dhiwise Design Team
              </Text>
              <Text
                className="font-normal lg:mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[9px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[auto]"
                compid="5122:11303"
                comptype="Text"
              >
                7:45 PM
              </Text>
            </Row>
            <Text
              className="font-normal lg:leading-[20px] xl:leading-[23px] 2xl:leading-[26px] 3xl:leading-[31px] lg:ml-[43px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:my-[14px] xl:my-[16px] 2xl:my-[18px] 3xl:my-[21px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-gray_700 w-[79%]"
              compid="5122:11298"
              comptype="Text"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cras
              proin vitae ornare ut senectus.
            </Text>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default CommentPopupModal;
