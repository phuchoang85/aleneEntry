import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { resultReq } from "@/constant/type";
import { colorPuplic, stylesTextPuplic } from "@/constant/stylesPuplic";
import LinearTextStyle from "@/components/LinearTextStyle";

const ContentChange = ({ listQuest }: { listQuest: resultReq[] }) => {
  const returnColor = () => {
    if (listQuest[3].status === "bad") {
      return styles.styleTextGreen;
    } else if (listQuest.find((ele) => ele.status === "bad")) {
      return styles.styleTextRed;
    } else {
      return styles.styleTextYellow;
    }
  };

  const retunContent = () => {
    if (listQuest[3].status === "bad") {
      return "Bạn có hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của bạn cũng tốt.";
    } else if (listQuest.find((ele) => ele.status === "bad")) {
      return "Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng cần quan tâm đến hệ vận động nhiều hơn nhé bởi sau 40 tuổi,...";
    } else {
      return "Tuy rằng có vẻ bạn đang có hệ vận động tốt nhưng cần chú ý đến đến sức đề kháng hơn nhé...";
    }
  };

  return (
    <>
      <Text style={[stylesTextPuplic.text13bold, returnColor()]}>
        HOÀN THÀNH BÀI KIỂM TRA
      </Text>
      {listQuest.find((ele) => ele.status !== "good") ? (
        <Text style={[stylesTextPuplic.text26bold, returnColor()]}>
          LƯU Ý MỘT CHÚT!
        </Text>
      ) : (
        <View style={{ marginBottom: 30 }}>
          <LinearTextStyle
            styles={[stylesTextPuplic.text26bold, returnColor()]}
          >
            XIN CHÚC MỪNG
          </LinearTextStyle>
        </View>
      )}

      <Text style={[stylesTextPuplic.text12bold, styles.styleTextWhite]}>
        {retunContent()}
      </Text>

      <Text style={[stylesTextPuplic.text15bold, styles.styleTextWhite]}>
        Điền thông tin bên dưới để xem đầy đủ kết quả và nhận ngay Voucher ưu
        đãi lên đến 100.000đ đến từ Anlene.
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  styleTextWhite: {
    color: colorPuplic.white,
    textAlign: "center",
  },
  styleTextRed: {
    color: colorPuplic.red,
  },
  styleTextYellow: {
    color: colorPuplic.yellow,
  },
  styleTextGreen: {
    color: colorPuplic.greenStrong,
  },
});
export default ContentChange;
