import {
  Text,
  Pressable,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import {
  colorLinearPublic,
  colorPuplic,
  stylesTextPuplic,
} from "@/constant/stylesPuplic";

const ShowMoreText = ({
  showMore,
  setShowMore,
  backgroundSubmit,
}: {
  showMore: boolean;
  setShowMore: (value: boolean) => void;
  backgroundSubmit: () => {
    colors: string[];
    locations: number[];
  };
}) => {
  const { width: MAX_WIDTH } = useWindowDimensions();
  const styles = StyleSheet.create({
    container: {
      marginVertical: 10,
      width: "100%",
    },
    textWhite: {
      color: colorPuplic.white,
      textAlign: MAX_WIDTH >= 1024 ? "left" : "center",
    },
  });

  const handleShowMore = () => {
    setShowMore(true);
  };
  return (
    <View style={styles.container}>
      {!showMore && (
        <Pressable onPress={handleShowMore}>
          <Text
            style={[
              MAX_WIDTH >= 1024
                ? stylesTextPuplic.text13reg
                : stylesTextPuplic.text12reg,
              {
                textDecorationLine: "underline",
                color:
                  backgroundSubmit() === colorLinearPublic.luuy
                    ? colorPuplic.greenStrong
                    : colorPuplic.yellow,
                textAlign: "center",
              },
            ]}
          >
            Xem thêm
          </Text>
        </Pressable>
      )}
      {showMore && (
        <Text
          style={[
            MAX_WIDTH >= 1024
              ? stylesTextPuplic.text13book
              : stylesTextPuplic.text12italic,
            styles.textWhite,
          ]}
        >
          *Anlene 3 Khoẻ với công thức MovePro chứa các dưỡng chất Đạm, Canxi,
          Collagen cùng các Vitamin, Khoáng chất giúp Cơ-Xương-Khớp chắc khỏe và
          tăng sức đề kháng, cho bạn thoải mái vận động, tận hưởng cuộc sống.
        </Text>
      )}
    </View>
  );
};

export default ShowMoreText;
