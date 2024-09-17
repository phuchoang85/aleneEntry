import { dataContent, dataPageFinished, resultReq } from "./type";

export const questionList: resultReq[] = [
  {
    id: 1,
    content: "Cơ",
    status: "noSelect",
    video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    guide: "Thẳng lưng trước ghế, đứng lên ngồi xuống 6-10 giây",
  },
  {
    id: 2,
    content: "Xương",
    status: "noSelect",
    video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    guide:
      "Duỗi 2 tay về phía trước, từ từ cuối xuống để chạm vào mũi bàn chân",
  },
  {
    id: 3,
    content: "Khớp",
    status: "noSelect",
    video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    guide: "Đứng rộng chân, lưng thẳng đứng, tay đưa ra sau và đan vào nhau",
  },
  {
    id: 4,
    content: "Đề Kháng",
    status: "noSelect",
    video: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
    guide: "6 tháng gần đây, bạn có gặp các triệu chứng: ho, sổ mũi, cảm sốt?",
  },
];

export const dataPageFour: dataContent[] = [
  {
    id: 1,
    content1:
      "Có vẻ bạn đang có sức đề kháng tốt nhưng cần chú ý đến hệ vận động hơn nhé vì sau tuổi 40 sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm:",
    content2:
      "Rào cản vận động này có thể mang đến những cơn đau nhức mỏi không mong muốn.",
    content3:
      "Ngay từ bây giờ, cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!",
  },
  {
    id: 2,
    content1:
      "Tuy rằng có vẻ bạn đang có đề kháng tốt nhưng cần quan tâm đến hệ vận động nhiều hơn nhé, bởi sau tuổi 40, sức khoẻ Cơ-Xương-Khớp suy giảm:",
    content2:
      "Bạn có thể sẽ phải đối mặt với những cơn đau nhức mỏi thường xuyên, gây khó khăn trong vận động và sinh hoạt hằng ngày.",
    content3:
      "Đừng chậm trễ, cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!",
  },
  {
    id: 3,
    content1:
      "Bạn có một hệ Cơ-Xương-Khớp linh hoạt và có vẻ sức đề kháng của bạn cũng tốt. Cố gắng duy trì thể trạng tốt này nhé. Vì sau tuổi 40, sức khoẻ Cơ-Xương-Khớp có thể bị suy giảm.",
    content2:
      "Tác động này có thể tạo ra những cơn đau nhức mỏi ảnh hưởng đến vận động hằng ngày.",
    content3:
      "Cùng Anlene giúp bạn chăm sóc sức khoẻ Cơ-Xương-Khớp ngay hôm nay với Ưu đãi hấp dẫn đang chờ bạn!",
  },
];

export const listDataPageFinished: dataPageFinished[] = [
  {
    id: 1,
    contentWhite: "Khối cơ",
    contentYellow: "Mất đi",
    image: require("@images/less_muscle.png"),
  },
  {
    id: 2,
    contentWhite: "Mật độ xương",
    contentYellow: "Suy giảm",
    image: require("@images/less_bone_density.png"),
  },
  {
    id: 3,
    contentWhite: "Khớp",
    contentYellow: "Thoái hóa",
    image: require("@images/knee_osteoarthritis.png"),
  },
];
