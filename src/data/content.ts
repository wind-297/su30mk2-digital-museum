// SU-30MK2 Digital Museum - Content Data
// Source: Official exhibition script provided by the project

export const siteConfig = {
  title: "SU-30MK2 — Bảo tàng Số Quốc phòng Việt Nam",
  description:
    "Khám phá máy bay tiêm kích đa năng Sukhoi Su-30MK2 — hiện vật tiêu biểu trong quá trình hiện đại hóa Không quân Nhân dân Việt Nam. Dự án giáo dục quốc phòng: Em là nhà sáng tạo.",
  projectName: "EM LÀ NHÀ SÁNG TẠO – BẢO TÀNG QUỐC PHÒNG VIỆT NAM",
  ogImage: "/images/og-cover.jpg",
  lang: "vi",
};

export const heroData = {
  designation: "SU-30MK2",
  fullName: "Sukhoi Su-30MK2",
  subtitle: "Máy bay tiêm kích đa năng — Không quân Nhân dân Việt Nam",
  intro:
    "Dòng máy bay chiến đấu hiện đại do Nga phát triển, gắn liền với quá trình hiện đại hóa lực lượng Không quân Nhân dân Việt Nam trong thế kỷ XXI.",
  quickFacts: [
    { label: "Quốc gia phát triển", value: "Liên bang Nga" },
    { label: "Nhà thiết kế", value: "Phòng thiết kế Sukhoi" },
    { label: "Tổ lái", value: "2 người" },
    { label: "Động cơ", value: "2 × AL-31F" },
  ],
};

export const overviewData = {
  sectionLabel: "01",
  sectionTitle: "Tổng quan hiện vật",
  sectionId: "overview",
  intro:
    "Sukhoi Su-30MK2 là máy bay tiêm kích đa năng hai chỗ ngồi, hai động cơ phản lực, do Liên bang Nga phát triển trên nền tảng thiết kế của dòng Su-27. Thuộc nhánh Su-30MK2 phát triển từ Su-30MKK, máy bay được thiết kế theo định hướng đa nhiệm, kết hợp đặc tính khí động học của dòng Su-27 với hệ thống điều khiển và trang thiết bị điện tử hàng không hiện đại.",
  details: [
    {
      label: "Nhà thiết kế",
      value: "Phòng thiết kế Sukhoi (Liên bang Nga)",
    },
    {
      label: "Nhà sản xuất",
      value: "Nhà máy hàng không Komsomolsk-on-Amur (KnAAPO)",
    },
    {
      label: "Phân loại",
      value: "Máy bay tiêm kích đa năng",
    },
    {
      label: "Cấu hình",
      value: "Hai chỗ ngồi, hai động cơ phản lực",
    },
    {
      label: "Nền tảng phát triển",
      value: "Dòng Su-27 → Su-30MKK → Su-30MK2",
    },
  ],
  naming:
    'Trong hệ thống định danh, Su là tên viết tắt của Sukhoi, còn số 30 là ký hiệu của dòng máy bay. Phần hậu tố MK2 biểu thị một biến thể tiêm kích đa năng thuộc nhánh phát triển dành cho xuất khẩu. Su-30MK2 cần được phân biệt với những phiên bản khác như Su-30MKI của Ấn Độ, Su-30SM của Nga và Su-30MKK của Trung Quốc, bởi mỗi biến thể có những đặc điểm riêng về quá trình phát triển, cấu hình và trang thiết bị.',
  vietnamContext:
    "Tại Việt Nam, Su-30MK2 là một trong những loại máy bay tiêm kích hiện đại được đưa vào trang bị trong quá trình xây dựng lực lượng Không quân Nhân dân Việt Nam. Với cấu hình hai chỗ ngồi, hai động cơ và khả năng đảm nhiệm nhiều nhiệm vụ hàng không quân sự, loại máy bay này gắn liền với yêu cầu nâng cao năng lực bảo vệ vùng trời, vùng biển và chủ quyền quốc gia.",
};

export const historyData = {
  sectionLabel: "02",
  sectionTitle: "Hành trình lịch sử",
  sectionId: "history",
  timeline: [
    {
      era: "world",
      year: "Thập niên 1970",
      title: "Khởi nguồn Su-27",
      content:
        "Phòng thiết kế Sukhoi bắt đầu nghiên cứu dòng Su-27 — một trong những chương trình hàng không quân sự quan trọng của Liên Xô, hướng đến xây dựng thế hệ máy bay tiêm kích có đặc tính khí động học tiên tiến.",
    },
    {
      era: "world",
      year: "Thập niên 1980",
      title: "Su-27UB và chương trình Su-27PU",
      content:
        "Su-27UB được xây dựng với cấu hình hai chỗ ngồi phục vụ huấn luyện. Nửa sau thập niên, Sukhoi triển khai chương trình Su-27PU — phát triển tiêm kích đánh chặn hai chỗ ngồi với khả năng hoạt động trong thời gian dài.",
    },
    {
      era: "world",
      year: "Cuối 1989",
      title: "Chuyến bay thử nghiệm đầu tiên",
      content:
        "Những nguyên mẫu đầu tiên của Su-27PU thực hiện chuyến bay thử, mở đầu cho quá trình hình thành dòng Su-30.",
    },
    {
      era: "world",
      year: "Đầu thập niên 1990",
      title: "Su-30 ra đời và hướng xuất khẩu",
      content:
        "Su-30 được sản xuất tại nhà máy Irkutsk. Sau khi Liên Xô tan rã, Sukhoi chuyển hướng phát triển các phiên bản dành cho xuất khẩu, trong đó có Su-30M và Su-30MK.",
    },
    {
      era: "world",
      year: "Cuối thập niên 1990",
      title: "Su-30MKK — nền tảng cho MK2",
      content:
        "Su-30MKK hình thành từ chương trình hợp tác Nga–Trung Quốc, do Sukhoi thiết kế và sản xuất tại Komsomolsk-on-Amur. Đây là nền tảng trực tiếp cho biến thể Su-30MK2.",
    },
    {
      era: "world",
      year: "Đầu những năm 2000",
      title: "Su-30MK2 ra đời",
      content:
        "Trên nền tảng Su-30MKK, Nga phát triển Su-30MK2 — phiên bản được điều chỉnh hệ thống và trang thiết bị, hướng đến yêu cầu khai thác cụ thể của khách hàng xuất khẩu.",
    },
    {
      era: "vietnam",
      year: "Thập niên 1990",
      title: "Việt Nam tiếp nhận Su-27",
      content:
        "Việt Nam bắt đầu tiếp nhận các máy bay thuộc dòng Su-27 từ Nga, một phần trong quá trình hiện đại hóa lực lượng không quân sau thời kỳ đất nước thống nhất.",
    },
    {
      era: "vietnam",
      year: "12/2003",
      title: "Hợp đồng lịch sử",
      content:
        "Việt Nam ký hợp đồng mua bốn máy bay đầu tiên thuộc dòng Su-30, đánh dấu bước ngoặt trong quá trình trang bị máy bay tiêm kích thế hệ mới.",
    },
    {
      era: "vietnam",
      year: "2004",
      title: "Những chiếc Su-30 đầu tiên đến Việt Nam",
      content:
        "Bốn máy bay đầu tiên được chuyển giao, vận chuyển bằng An-124, lắp ráp và kiểm tra tại Việt Nam với sự hỗ trợ của chuyên gia Nga. Đánh dấu sự xuất hiện của tiêm kích hai chỗ ngồi thế hệ mới trong Không quân Nhân dân Việt Nam.",
    },
    {
      era: "vietnam",
      year: "2009",
      title: "Mở rộng phi đội",
      content: "Việt Nam ký hợp đồng mua thêm tám chiếc Su-30MK2.",
    },
    {
      era: "vietnam",
      year: "2010",
      title: "Tiếp tục trang bị",
      content:
        "Hợp đồng mua thêm mười hai chiếc Su-30MK2 được ký kết, thể hiện nhu cầu mở rộng năng lực không quân.",
    },
    {
      era: "vietnam",
      year: "2013",
      title: "Hợp đồng bổ sung",
      content:
        "Mười hai máy bay Su-30MK2 tiếp theo được đặt mua, với các đợt bàn giao diễn ra trong những năm sau.",
    },
    {
      era: "vietnam",
      year: "2016",
      title: "Hoàn tất chuyển giao",
      content:
        "Quá trình chuyển giao hoàn tất. Theo VTC News, tổng cộng 36 máy bay thuộc dòng Su-30 đã được chuyển giao cho Không quân Việt Nam trong giai đoạn 2004–2016.",
    },
  ],
  note: "Cần lưu ý rằng tên gọi của lô máy bay đầu tiên chưa được các nguồn báo chí công khai thống nhất hoàn toàn. VTC News gọi bốn chiếc được chuyển giao năm 2004 là Su-30MK2, trong khi một số tư liệu tổng hợp phân biệt lô đầu là Su-30MK và những lô tiếp theo mới là Su-30MK2.",
};

export const roleData = {
  sectionLabel: "03",
  sectionTitle: "Công dụng và vai trò",
  sectionId: "role",
  intro:
    "Su-30MK2 được xếp vào nhóm máy bay tiêm kích đa năng — dòng máy bay được thiết kế để thực hiện nhiều nhiệm vụ hàng không quân sự khác nhau, thay vì chỉ tập trung vào một chức năng riêng biệt.",
  multirole: {
    title: "Máy bay tiêm kích đa năng",
    content:
      "Đặc điểm đa năng được hình thành từ sự kết hợp của nhiều yếu tố: thiết kế khí động học, hệ thống động cơ, khả năng điều khiển, trang thiết bị điện tử và cách bố trí tổ lái. Sự phối hợp giữa các thành phần này tạo nên một nền tảng hàng không có khả năng thích ứng với nhiều yêu cầu hoạt động.",
    source:
      "Theo tài liệu giới thiệu của Rosoboronexport, Su-30MK2 được phát triển như một máy bay tiêm kích đa năng, có cấu hình hai chỗ ngồi và hệ thống thiết bị hàng không phục vụ nhiều nhóm nhiệm vụ.",
  },
  missions: [
    {
      icon: "shield",
      title: "Bảo vệ vùng trời",
      description:
        "Gắn với nhiệm vụ bảo vệ vùng trời, tuần tra và thực hiện những nhiệm vụ hàng không quân sự được giao.",
    },
    {
      icon: "waves",
      title: "Bảo vệ vùng biển",
      description:
        "Khả năng hoạt động trên biển, hỗ trợ nhiệm vụ bảo vệ chủ quyền biển đảo của Tổ quốc.",
    },
    {
      icon: "users",
      title: "Huấn luyện phi công",
      description:
        "Cấu hình hai chỗ ngồi có giá trị đối với hoạt động huấn luyện và chuyển loại phi công.",
    },
    {
      icon: "target",
      title: "Đa nhiệm vụ",
      description:
        "Đặc tính đa năng tạo điều kiện để lực lượng khai thác thích ứng với những yêu cầu hoạt động khác nhau.",
    },
  ],
  vietnamSignificance:
    "Đối với Việt Nam, nhiệm vụ bảo vệ vùng trời có mối liên hệ chặt chẽ với nhiệm vụ bảo vệ toàn vẹn lãnh thổ và chủ quyền quốc gia. Không gian trên không không tồn tại tách biệt với các hoạt động quốc phòng khác mà nằm trong một hệ thống bảo vệ tổng thể, gắn với vùng đất, vùng biển và các khu vực đảo thuộc chủ quyền Việt Nam.",
  closing:
    "Với vai trò là máy bay tiêm kích đa năng, Su-30MK2 góp phần bổ sung phương tiện hàng không hiện đại cho lực lượng Không quân Nhân dân Việt Nam. Việc trang bị dòng máy bay này tạo cơ sở để nâng cao năng lực tổ chức huấn luyện, duy trì hoạt động bay và đáp ứng các yêu cầu bảo vệ vùng trời, vùng biển theo nhiệm vụ được giao.",
  caveat:
    "Tính đa nhiệm không có nghĩa mọi chiếc Su-30MK2 ở mọi quốc gia đều có trang bị hoàn toàn giống nhau. Cấu hình cụ thể có thể khác biệt tùy theo yêu cầu đặt hàng, thiết bị tích hợp và quá trình bảo đảm kỹ thuật của quốc gia sử dụng.",
};

export const anatomyData = {
  sectionLabel: "04",
  sectionTitle: "Khám phá cấu tạo",
  sectionId: "anatomy",
  intro:
    "Su-30MK2 kế thừa nhiều đặc điểm thiết kế của dòng Su-27, nổi bật với thân dài, cánh xuôi về phía sau và hai đuôi đứng. Toàn bộ cấu trúc được hình thành dựa trên sự phối hợp giữa các bề mặt khí động học nhằm tạo lực nâng, duy trì ổn định và hỗ trợ điều khiển máy bay.",
  parts: [
    {
      id: "nose",
      name: "Mũi máy bay",
      description:
        "Phần mũi thuôn dài tạo nên dáng vẻ đặc trưng của dòng Su-30, đồng thời là khu vực bố trí một số thiết bị hàng không, bao gồm hệ thống radar.",
    },
    {
      id: "fuselage",
      name: "Thân máy bay",
      description:
        "Kết cấu trung tâm liên kết các bộ phận và chứa những hệ thống kỹ thuật thiết yếu. Bên trong bố trí buồng lái, động cơ, các khoang thiết bị và những thành phần phục vụ hoạt động.",
    },
    {
      id: "cockpit",
      name: "Buồng lái hai chỗ ngồi",
      description:
        "Bố trí nối tiếp theo chiều dài thân. Vị trí trước dành cho phi công điều khiển chính, vị trí sau cho thành viên tổ lái thứ hai phối hợp và hỗ trợ.",
    },
    {
      id: "wings",
      name: "Cánh chính",
      description:
        "Hai cánh đặt đối xứng hai bên thân, có dạng xuôi về phía sau. Nhiệm vụ cơ bản là tạo lực nâng khi không khí chuyển động qua bề mặt.",
    },
    {
      id: "vertical-stabilizers",
      name: "Hai đuôi đứng",
      description:
        "Đặt ở phần cuối thân, góp phần duy trì ổn định theo phương hướng — đặc điểm nhận diện quan trọng của dòng Su-27/Su-30.",
    },
    {
      id: "horizontal-stabilizers",
      name: "Đuôi ngang",
      description:
        "Các bề mặt đuôi ngang tham gia điều khiển chuyển động theo phương thẳng đứng, là bộ phận quan trọng trong cấu trúc khí động học tổng thể.",
    },
    {
      id: "intakes",
      name: "Hai cửa hút khí",
      description:
        "Bố trí ở phần dưới thân, cung cấp không khí cho hai động cơ phản lực. Hình dạng và vị trí cửa hút khí ảnh hưởng đến hiệu suất động cơ.",
    },
    {
      id: "engines",
      name: "Hai động cơ phản lực AL-31F",
      description:
        "Động cơ tuốc-bin phản lực hai luồng có buồng đốt tăng lực, bố trí song song phía sau thân. Hoạt động bằng cách hút, nén không khí và kết hợp nhiên liệu để tạo lực đẩy.",
    },
    {
      id: "landing-gear",
      name: "Càng đáp",
      description:
        "Hệ thống càng thu gọn hỗ trợ cất cánh, hạ cánh và di chuyển trên mặt đất. Bao gồm càng mũi và hai càng chính.",
    },
  ],
  aerodynamics:
    "Một trong những đặc điểm quan trọng là sự kết hợp giữa thân, cánh chính và các bề mặt điều khiển phía sau. Khi máy bay chuyển động trong không khí, các bộ phận này tạo nên hệ thống khí động học thống nhất.",
  avionics: {
    title: "Hệ thống điện tử hàng không",
    content:
      "Điện tử hàng không (avionics) là tập hợp những thiết bị điện tử phục vụ hoạt động máy bay, bao gồm thông tin liên lạc, định vị, hiển thị dữ liệu và giám sát tình trạng hoạt động. Hệ thống radar hoạt động dựa trên nguyên lý phát và thu sóng điện từ để thu nhận thông tin từ môi trường xung quanh.",
    integration:
      "Hệ thống điện tử hàng không không chỉ là tập hợp những thiết bị riêng lẻ mà còn là một tổ hợp có tính liên kết. Việc tích hợp các thành phần này góp phần hỗ trợ phi công quản lý hoạt động bay.",
  },
};

export const technicalData = {
  sectionLabel: "05",
  sectionTitle: "Đặc điểm kỹ thuật",
  sectionId: "technical",
  intro:
    "Những thông số dưới đây được lựa chọn từ tài liệu giới thiệu Su-30MK2 của Rosoboronexport, ưu tiên các thông tin nhận diện cấu hình thay vì những số liệu hiệu năng phụ thuộc vào điều kiện khai thác.",
  specs: [
    {
      param: "Phân loại",
      value: "Tiêm kích đa năng",
      meaning: "Thiết kế hướng đến nhiều nhóm nhiệm vụ hàng không",
    },
    {
      param: "Tổ lái",
      value: "2 người",
      meaning: "Buồng lái bố trí hai vị trí nối tiếp",
    },
    {
      param: "Số động cơ",
      value: "2",
      meaning: "Hai động cơ đặt phía sau thân",
    },
    {
      param: "Loại động cơ",
      value: "AL-31F",
      meaning: "Động cơ tuốc-bin phản lực hai luồng có buồng đốt tăng lực",
    },
    {
      param: "Khối lượng cất cánh tối đa",
      value: "34.500 kg",
      meaning: "Thể hiện quy mô và kết cấu của dòng máy bay",
    },
  ],
  disclaimer:
    "Các thông số trên cần được hiểu trong phạm vi cấu hình Su-30MK2 do nhà sản xuất giới thiệu, không tự động áp dụng cho toàn bộ dòng Su-30. Những phiên bản khác có thể được điều chỉnh về hệ thống động cơ, thiết bị điện tử và cấu hình kỹ thuật theo yêu cầu của quốc gia sử dụng.",
};

export const vietnamData = {
  sectionLabel: "06",
  sectionTitle: "Su-30MK2 và Không quân Nhân dân Việt Nam",
  sectionId: "vietnam",
  modernization: {
    title: "Vị trí trong quá trình hiện đại hóa",
    content:
      "Sự hiện diện của Su-30MK2 đánh dấu một giai đoạn đáng chú ý trong quá trình hiện đại hóa trang bị hàng không quân sự của Việt Nam. Việc tiếp nhận dòng máy bay này không đơn thuần là bổ sung phương tiện mới mà còn đặt ra yêu cầu phát triển đồng bộ về con người, trình độ kỹ thuật và năng lực bảo đảm hoạt động.",
    detail:
      "So với những dòng máy bay được trang bị trước đó, Su-30MK2 có cấu hình và hệ thống điện tử phức tạp hơn, đòi hỏi phi công phải được đào tạo chuyên sâu để làm chủ phương tiện. Đồng thời, đội ngũ kỹ thuật viên phải tiếp cận công nghệ mới, nâng cao khả năng kiểm tra, bảo dưỡng và xử lý các yêu cầu kỹ thuật của máy bay.",
    principle:
      "Hiện đại hóa trang bị phải đi đôi với hiện đại hóa con người, tổ chức và công tác bảo đảm. Một nền tảng hàng không có trình độ công nghệ cao chỉ có thể phát huy giá trị khi được khai thác bởi đội ngũ có đủ năng lực chuyên môn.",
  },
  sovereignty: {
    title: "Bảo vệ vùng trời, vùng biển và chủ quyền quốc gia",
    content:
      "Trong lực lượng Không quân Nhân dân Việt Nam, Su-30MK2 gắn với nhiệm vụ bảo vệ vùng trời, vùng biển và các khu vực đảo được giao. Đây là những nhiệm vụ có ý nghĩa đặc biệt đối với một quốc gia có vị trí địa lý trải dài theo bờ biển.",
    regiment:
      "Theo Báo Quân đội nhân dân (10/2024), Trung đoàn Không quân 935 thuộc Sư đoàn 370 khai thác Su-30MK2 với nhiệm vụ bảo vệ vùng trời, biển và đảo được giao. Đơn vị đồng thời tham gia đào tạo phi công Su-30MK2 cho các đơn vị không quân trong cả nước.",
    broader:
      "Nhiệm vụ bảo vệ chủ quyền quốc gia là trách nhiệm chung của toàn quân và toàn dân, trong đó Không quân Nhân dân Việt Nam là một lực lượng quan trọng. Su-30MK2 là một trong những phương tiện góp phần thực hiện nhiệm vụ đó.",
  },
  personnel: {
    title: "Đội ngũ phi công và cán bộ kỹ thuật",
    pilotTraining:
      "Phi công phải trải qua quá trình chuyển loại để làm quen với cấu hình buồng lái, các hệ thống điều khiển và đặc tính kỹ thuật của máy bay. Quá trình huấn luyện đòi hỏi sự kết hợp giữa kiến thức lý thuyết, khả năng thực hành và ý thức tuân thủ nghiêm ngặt các quy định an toàn hàng không.",
    technicians:
      "Đối với đội ngũ kỹ thuật viên, việc khai thác Su-30MK2 đòi hỏi kiến thức chuyên sâu về kết cấu, động cơ, điện tử hàng không và các hệ thống kỹ thuật liên quan. Công tác kiểm tra, bảo dưỡng và duy trì tình trạng kỹ thuật là những nhiệm vụ thường xuyên.",
    regiment927:
      "Báo Quân đội nhân dân trong bài viết tháng 4/2018 về quá trình chuyển loại và làm chủ máy bay thế hệ mới tại Trung đoàn Không quân 927 đã phản ánh sự chuẩn bị đồng bộ về cơ sở vật chất, lựa chọn nhân lực và huấn luyện lý thuyết kết hợp thực hành.",
    evaluation:
      "Tháng 9/2024, Quân chủng Phòng không – Không quân tổ chức kiểm tra phân cấp kỹ thuật phi công, thành viên tổ bay đối với lực lượng khai thác Su-30MK2, tập trung vào kiến thức lý thuyết và trình độ chuyên môn hàng không.",
    closing:
      "Khả năng làm chủ trang bị hiện đại luôn gắn liền với quá trình học tập và rèn luyện liên tục. Sự đóng góp của phi công, kỹ thuật viên, cán bộ huấn luyện và các lực lượng bảo đảm là nền tảng để duy trì hoạt động của lực lượng không quân.",
  },
  defense: {
    title: "Ý nghĩa đối với nền quốc phòng hiện đại",
    content:
      "Su-30MK2 là một trong những dấu mốc tiêu biểu của quá trình hiện đại hóa trang bị hàng không quân sự tại Việt Nam. Việc tiếp nhận và khai thác dòng máy bay này phản ánh sự phát triển về trình độ kỹ thuật, năng lực đào tạo và khả năng tổ chức bảo đảm của lực lượng Không quân Nhân dân Việt Nam.",
    value:
      "Giá trị của việc hiện đại hóa không chỉ nằm ở việc sở hữu những phương tiện có công nghệ mới mà còn ở khả năng duy trì, khai thác và phát huy hiệu quả trang bị trong điều kiện thực tế.",
  },
};

export const conclusionData = {
  sectionLabel: "07",
  sectionTitle: "Giá trị lịch sử và quốc phòng",
  sectionId: "conclusion",
  paragraphs: [
    "Su-30MK2 là sản phẩm của quá trình phát triển liên tục từ nền tảng Su-27, phản ánh những thay đổi trong tư duy thiết kế và công nghệ hàng không quân sự hiện đại. Từ một chương trình phát triển tiêm kích hai chỗ ngồi của Liên Xô, dòng Su-30 từng bước được mở rộng thành nhiều biến thể đa năng, trong đó Su-30MK2 là một nhánh tiêu biểu dành cho thị trường xuất khẩu.",
    "Đối với Việt Nam, Su-30MK2 gắn liền với quá trình đổi mới trang bị và xây dựng lực lượng Không quân Nhân dân Việt Nam trong thế kỷ XXI. Sự xuất hiện của dòng máy bay này thể hiện yêu cầu không ngừng nâng cao năng lực chuyên môn, tiếp cận khoa học kỹ thuật hiện đại và xây dựng lực lượng có khả năng đáp ứng những nhiệm vụ quốc phòng trong tình hình mới.",
    "Tìm hiểu về Su-30MK2 cũng là dịp để nhìn nhận vai trò của con người trong lĩnh vực hàng không quân sự. Đằng sau những hệ thống kỹ thuật phức tạp là quá trình học tập, huấn luyện và lao động thầm lặng của các thế hệ phi công, kỹ thuật viên, cán bộ và chiến sĩ thuộc lực lượng Phòng không – Không quân.",
    "Qua đó, Su-30MK2 không chỉ được nhận diện như một loại máy bay tiêm kích đa năng có nguồn gốc từ Nga mà còn là một phần trong lịch sử hiện đại hóa quốc phòng Việt Nam. Những kiến thức về lịch sử phát triển, cấu tạo và vai trò của loại máy bay này giúp người đọc hiểu rõ hơn mối liên hệ giữa tiến bộ khoa học kỹ thuật với nhiệm vụ xây dựng và bảo vệ Tổ quốc.",
  ],
};

export const referencesData = {
  sectionLabel: "08",
  sectionTitle: "Tài liệu tham khảo",
  sectionId: "references",
  intro:
    "Các nguồn dưới đây được lựa chọn để hỗ trợ việc xác minh lịch sử phát triển, nhận diện kỹ thuật và quá trình Su-30MK2 được đưa vào phục vụ tại Việt Nam.",
  sources: [
    {
      title:
        "Russian Combat Aviation: Procurement, Modernization, and Future Outlook",
      publisher: "Center for Naval Analyses (CNA)",
      author: "Leonid Nersisyan",
      date: "Tháng 12/2020",
      description:
        "Phần nghiên cứu về dòng Su-27 và Su-30 cung cấp cơ sở để xác định nguồn gốc Su-30 từ Su-27PU và nền tảng Su-27UB.",
      url: "https://www.cna.org/reports/2020/12/russian-combat-aviation",
    },
    {
      title: "Su-30MK2 Multirole Fighter",
      publisher: "Rosoboronexport",
      date: "",
      description:
        "Tài liệu giới thiệu chính thức cung cấp thông tin về phân loại, tổ lái, động cơ và đặc điểm kỹ thuật cơ bản.",
      url: "https://roe.ru/eng/catalog/aerospace-systems/fighter-aircraft/su-30mk2/",
    },
    {
      title: "Su-30MKK Russian Multirole Fighter Aircraft",
      publisher: "U.S. Army – OE Data Integration Network (ODIN)",
      date: "",
      description:
        "Cung cấp thông tin về quan hệ phát triển giữa Su-30MKK và Su-30MK2, phân biệt các biến thể thuộc dòng Su-30.",
      url: "https://odin.tradoc.army.mil/",
    },
    {
      title:
        "Ảnh hiếm quá trình tiếp nhận Su-30MK2 của không quân Việt Nam 20 năm trước",
      publisher: "VTC News",
      author: "Trà Khánh",
      date: "18/04/2024",
      description:
        "Tư liệu về quá trình tiếp nhận, vận chuyển, lắp ráp và bàn giao máy bay Su-30 cho Việt Nam năm 2004.",
      url: "https://vtcnews.vn/anh-hiem-qua-trinh-tiep-nhan-su-30mk2-cua-khong-quan-viet-nam-20-nam-truoc-ar862093.html",
    },
    {
      title: "Điểm lại các thương vụ mua bán vũ khí Việt – Nga",
      publisher: "Soha",
      date: "06/03/2013",
      description:
        "Thông tin về các hợp đồng mua máy bay Su-30, phân biệt lô Su-30 đầu tiên và các lô Su-30MK2 tiếp theo.",
      url: "https://soha.vn/diem-lai-cac-thuong-vu-mua-ban-vu-khi-viet-nga-20130306.htm",
    },
    {
      title:
        "Kinh nghiệm chuyển loại, làm chủ máy bay thế hệ mới ở Đoàn không quân Lam Sơn",
      publisher: "Báo Quân đội nhân dân",
      date: "24/04/2018",
      description:
        "Phản ánh công tác đào tạo, chuyển loại phi công và làm chủ Su-30MK2 tại Trung đoàn Không quân 927.",
      url: "https://www.qdnd.vn/quoc-phong-an-ninh/xay-dung-quan-doi/kinh-nghiem-chuyen-loai-lam-chu-may-bay-the-he-moi-o-doan-khong-quan-lam-son-bai-1-536086",
    },
    {
      title: 'Làm chủ "Hổ mang chúa" SU-30MK2',
      publisher: "Báo Quân đội nhân dân",
      date: "23/10/2024",
      description:
        "Hoạt động huấn luyện, khai thác máy bay tại Trung đoàn Không quân 935, nhiệm vụ bảo vệ vùng trời, biển, đảo.",
      url: "https://www.qdnd.vn/quoc-phong-an-ninh/xay-dung-quan-doi/lam-chu-ho-mang-chua-su-30mk2-799056",
    },
    {
      title:
        "Quân chủng Phòng không – Không quân kiểm tra phân cấp kỹ thuật phi công năm 2024",
      publisher: "Báo Quân đội nhân dân",
      date: "30/09/2024",
      description:
        "Hoạt động kiểm tra, đánh giá trình độ chuyên môn của phi công và thành viên tổ bay khai thác Su-30MK2.",
      url: "https://www.qdnd.vn/quoc-phong-an-ninh/xay-dung-quan-doi/quan-chung-phong-khong-khong-quan-kiem-tra-phan-cap-ky-thuat-phi-cong-nam-2024-795923",
    },
  ],
};

export const navItems = [
  { label: "Tổng quan", href: "#overview" },
  { label: "Lịch sử", href: "#history" },
  { label: "Vai trò", href: "#role" },
  { label: "Cấu tạo", href: "#anatomy" },
  { label: "Kỹ thuật", href: "#technical" },
  { label: "Việt Nam", href: "#vietnam" },
  { label: "Giá trị", href: "#conclusion" },
  { label: "Tham khảo", href: "#references" },
];
