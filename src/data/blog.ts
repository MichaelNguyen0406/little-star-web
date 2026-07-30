// ============================================================
//  BÀI VIẾT BLOG — phục vụ SEO (nội dung tiếng Việt)
//  Thêm bài mới: copy một object trong mảng blogPosts và sửa nội dung.
//  slug là đường dẫn: /blog/<slug>  (chỉ dùng chữ thường, gạch nối)
// ============================================================

export interface BlogSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string; // tiêu đề cho thẻ <title> (tối ưu SEO)
  excerpt: string; // mô tả ngắn — dùng cho thẻ meta description & thẻ bài viết
  date: string; // YYYY-MM-DD
  readTime: string;
  cover: string; // TODO: thay bằng ảnh thật
  tags: string[];
  content: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "can-thiep-som-la-gi-giai-doan-vang-0-6-tuoi",
    title: "Can thiệp sớm là gì? Vì sao giai đoạn vàng 0–6 tuổi quyết định tương lai của con",
    metaTitle: "Can thiệp sớm là gì? Giai đoạn vàng 0–6 tuổi cho trẻ | Little Star",
    excerpt:
      "Can thiệp sớm là chìa khoá giúp trẻ tự kỷ, chậm nói, chậm phát triển bắt kịp bạn bè. Hiểu đúng về 'giai đoạn vàng' 0–6 tuổi để không bỏ lỡ thời điểm quan trọng nhất.",
    date: "2026-07-20",
    readTime: "6 phút đọc",
    cover: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=80",
    tags: ["Can thiệp sớm", "Kiến thức cha mẹ"],
    content: [
      {
        paragraphs: [
          "Nhiều cha mẹ khi thấy con có dấu hiệu chậm nói hay khác biệt trong giao tiếp thường chọn cách “chờ thêm một thời gian xem sao”. Nhưng với sự phát triển của trẻ nhỏ, thời gian là yếu tố quý giá nhất. Can thiệp sớm chính là cách tận dụng khoảng thời gian vàng ấy.",
        ],
      },
      {
        heading: "Can thiệp sớm là gì?",
        paragraphs: [
          "Can thiệp sớm (Early Intervention) là hệ thống các dịch vụ giáo dục và trị liệu dành cho trẻ từ 0–6 tuổi có nguy cơ hoặc đã được chẩn đoán chậm phát triển, tự kỷ, chậm nói, tăng động. Mục tiêu là giúp trẻ phát triển các kỹ năng ngôn ngữ, giao tiếp, vận động, hành vi và xã hội càng gần với mốc phát triển bình thường càng tốt.",
        ],
      },
      {
        heading: "Vì sao gọi là 'giai đoạn vàng'?",
        paragraphs: [
          "Trong 6 năm đầu đời, não bộ của trẻ phát triển với tốc độ nhanh nhất, hình thành hàng triệu kết nối thần kinh mỗi giây. Đây là giai đoạn não có tính “mềm dẻo” (neuroplasticity) cao nhất — nghĩa là khả năng học và thay đổi tốt nhất trong cả cuộc đời.",
          "Chính vì vậy, can thiệp trong giai đoạn này cho hiệu quả cao hơn nhiều so với khi trẻ đã lớn. Các nghiên cứu quốc tế đều khuyến nghị bắt đầu can thiệp ngay khi có dấu hiệu nghi ngờ, không cần chờ đến khi có chẩn đoán chắc chắn.",
        ],
      },
      {
        heading: "Những ai cần can thiệp sớm?",
        list: [
          "Trẻ chậm nói, vốn từ ít hơn nhiều so với bạn cùng tuổi",
          "Trẻ có dấu hiệu rối loạn phổ tự kỷ (ít giao tiếp mắt, không phản ứng khi gọi tên)",
          "Trẻ chậm phát triển vận động hoặc trí tuệ",
          "Trẻ tăng động, khó tập trung, khó kiểm soát hành vi",
        ],
      },
      {
        heading: "Cha mẹ nên làm gì?",
        paragraphs: [
          "Điều quan trọng nhất là quan sát và hành động sớm. Nếu con có bất kỳ dấu hiệu nào khiến bạn lo lắng, hãy tìm đến một trung tâm can thiệp sớm hoặc chuyên gia để được đánh giá. Việc đánh giá không gây hại gì cho con, ngược lại giúp bạn hiểu con hơn và có hướng đi đúng.",
          "Tại Little Star, chúng tôi cung cấp buổi đánh giá và tư vấn ban đầu để đồng hành cùng gia đình ngay từ bước đầu tiên.",
        ],
      },
    ],
  },
  {
    slug: "dau-hieu-nhan-biet-tre-tu-ky-som",
    title: "Dấu hiệu nhận biết trẻ tự kỷ sớm cha mẹ không nên bỏ qua",
    metaTitle: "Dấu hiệu trẻ tự kỷ sớm: 8 biểu hiện cha mẹ cần biết | Little Star",
    excerpt:
      "Nhận biết sớm dấu hiệu tự kỷ ở trẻ giúp can thiệp kịp thời trong giai đoạn vàng. Tổng hợp các biểu hiện theo từng mốc tuổi cha mẹ nên chú ý.",
    date: "2026-07-24",
    readTime: "5 phút đọc",
    cover: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=80",
    tags: ["Tự kỷ", "Dấu hiệu nhận biết"],
    content: [
      {
        paragraphs: [
          "Rối loạn phổ tự kỷ (ASD) có thể được nhận biết từ rất sớm, thậm chí trước 18 tháng tuổi. Phát hiện càng sớm, cơ hội can thiệp hiệu quả càng cao. Dưới đây là những dấu hiệu cha mẹ nên lưu ý.",
        ],
      },
      {
        heading: "Dấu hiệu về giao tiếp và ngôn ngữ",
        list: [
          "Không phản ứng khi được gọi tên (sau 12 tháng)",
          "Ít hoặc không giao tiếp bằng mắt",
          "Chậm nói, không bập bẹ, không nói từ đơn khi 16 tháng",
          "Không chỉ tay để thể hiện mong muốn hay chia sẻ sự chú ý",
        ],
      },
      {
        heading: "Dấu hiệu về hành vi",
        list: [
          "Lặp lại hành động: vẫy tay, xoay tròn, xếp đồ vật thành hàng",
          "Gắn bó bất thường với một đồ vật hoặc thói quen cứng nhắc",
          "Phản ứng quá mức hoặc thờ ơ với âm thanh, ánh sáng, chạm",
          "Khó thích nghi khi thay đổi thói quen thường ngày",
        ],
      },
      {
        heading: "Khi nào cần gặp chuyên gia?",
        paragraphs: [
          "Nếu con có một vài dấu hiệu trên, điều đó không có nghĩa chắc chắn con bị tự kỷ — nhưng đó là tín hiệu bạn nên đưa con đi đánh giá. Các công cụ sàng lọc chuẩn hóa như M-CHAT, Denver II sẽ giúp xác định con có cần can thiệp hay không.",
          "Đừng chờ đợi. Việc đánh giá sớm giúp con nhận được hỗ trợ đúng lúc, và giúp cha mẹ an tâm hơn với hành trình phía trước.",
        ],
      },
    ],
  },
  {
    slug: "tre-cham-noi-khi-nao-can-can-thiep",
    title: "Trẻ chậm nói: Khi nào cần can thiệp và can thiệp thế nào?",
    metaTitle: "Trẻ chậm nói khi nào cần can thiệp? Hướng dẫn cho cha mẹ | Little Star",
    excerpt:
      "Trẻ chậm nói có phải tự kỷ không? Khi nào là chậm nói đơn thuần, khi nào cần can thiệp âm ngữ trị liệu? Giải đáp cho cha mẹ đang lo lắng.",
    date: "2026-07-27",
    readTime: "5 phút đọc",
    cover: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1200&q=80",
    tags: ["Chậm nói", "Âm ngữ trị liệu"],
    content: [
      {
        paragraphs: [
          "“Con chậm nói có sao không?” là câu hỏi rất nhiều cha mẹ trăn trở. Chậm nói có thể chỉ là sự khác biệt tạm thời, nhưng cũng có thể là dấu hiệu của vấn đề cần can thiệp. Hiểu đúng sẽ giúp bạn không quá lo lắng nhưng cũng không chủ quan.",
        ],
      },
      {
        heading: "Các mốc ngôn ngữ bình thường",
        list: [
          "12 tháng: bập bẹ, nói được vài từ đơn giản như 'ba', 'mẹ'",
          "18 tháng: nói được khoảng 10–20 từ",
          "24 tháng: ghép được 2 từ ('mẹ bế', 'uống nước'), vốn từ ~50 từ",
          "36 tháng: nói câu ngắn, người lạ hiểu được phần lớn lời trẻ nói",
        ],
      },
      {
        heading: "Chậm nói đơn thuần hay dấu hiệu khác?",
        paragraphs: [
          "Nếu trẻ chậm nói nhưng vẫn giao tiếp tốt bằng mắt, cử chỉ, hiểu lời người lớn và tương tác xã hội bình thường, đó có thể là chậm nói đơn thuần. Ngược lại, nếu trẻ vừa chậm nói vừa ít giao tiếp mắt, không phản ứng khi gọi tên, chơi một mình — cần đánh giá kỹ hơn vì có thể liên quan đến tự kỷ.",
        ],
      },
      {
        heading: "Can thiệp thế nào?",
        paragraphs: [
          "Can thiệp cho trẻ chậm nói thường bao gồm âm ngữ trị liệu, kết hợp các hoạt động kích thích ngôn ngữ tại trung tâm và tại nhà. Cha mẹ đóng vai trò rất quan trọng: nói chuyện nhiều với con, đọc sách, mô tả hoạt động hằng ngày và khuyến khích con thể hiện nhu cầu bằng lời.",
          "Tại Little Star, chuyên viên âm ngữ trị liệu sẽ xây dựng lộ trình riêng cho từng bé và hướng dẫn gia đình đồng hành hiệu quả.",
        ],
      },
    ],
  },
  {
    slug: "cac-phuong-phap-can-thiep-tre-tu-ky-aba-esdm-teacch-pecs",
    title: "ABA, ESDM, TEACCH, PECS: Các phương pháp can thiệp trẻ tự kỷ phổ biến",
    metaTitle: "Các phương pháp can thiệp tự kỷ: ABA, ESDM, TEACCH, PECS | Little Star",
    excerpt:
      "Tìm hiểu các phương pháp can thiệp trẻ tự kỷ được công nhận quốc tế: ABA, ESDM, TEACCH, PECS, Floortime — ưu điểm và phù hợp với trẻ nào.",
    date: "2026-07-29",
    readTime: "7 phút đọc",
    cover: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
    tags: ["Phương pháp", "Tự kỷ"],
    content: [
      {
        paragraphs: [
          "Có rất nhiều phương pháp can thiệp cho trẻ tự kỷ, mỗi phương pháp có triết lý và điểm mạnh riêng. Không có phương pháp nào “tốt nhất cho tất cả” — điều quan trọng là chọn đúng phương pháp phù hợp với từng trẻ. Dưới đây là các phương pháp phổ biến và được công nhận trên thế giới.",
        ],
      },
      {
        heading: "ABA — Phân tích hành vi ứng dụng",
        paragraphs: [
          "ABA (Applied Behavior Analysis) là phương pháp có nền tảng bằng chứng khoa học mạnh nhất hiện nay. ABA chia kỹ năng thành các bước nhỏ, dạy từng bước và củng cố tích cực khi trẻ làm đúng. Phù hợp với nhiều nhóm trẻ và nhiều mục tiêu khác nhau.",
        ],
      },
      {
        heading: "ESDM — Mô hình Denver khởi đầu sớm",
        paragraphs: [
          "ESDM (Early Start Denver Model) dành cho trẻ nhỏ 1–4 tuổi, kết hợp nguyên lý ABA với can thiệp qua chơi. Mục tiêu phát triển được lồng ghép tự nhiên vào các hoạt động vui chơi hằng ngày, giúp trẻ học trong niềm vui.",
        ],
      },
      {
        heading: "TEACCH — Dạy học có cấu trúc",
        paragraphs: [
          "TEACCH sử dụng lịch trình trực quan, môi trường được tổ chức rõ ràng để giúp trẻ hiểu điều gì sắp diễn ra và tăng tính tự chủ. Đặc biệt hữu ích với trẻ học tốt bằng hình ảnh.",
        ],
      },
      {
        heading: "PECS & Floortime",
        paragraphs: [
          "PECS (Picture Exchange Communication System) dùng thẻ hình giúp trẻ chưa nói được thể hiện nhu cầu và bắt đầu giao tiếp. Floortime (DIR) tập trung xây dựng kết nối cảm xúc thông qua chính hứng thú của trẻ.",
          "Tại Little Star, chúng tôi đánh giá kỹ từng bé để lựa chọn và kết hợp linh hoạt các phương pháp, tạo nên lộ trình cá nhân hoá phù hợp nhất.",
        ],
      },
    ],
  },
  {
    slug: "cha-me-dong-hanh-cung-con-tai-nha-hoat-dong-cu-the",
    title: "Cha mẹ đồng hành cùng con tại nhà: những hoạt động can thiệp đơn giản mỗi ngày",
    metaTitle: "Dạy trẻ đặc biệt tại nhà: hoạt động can thiệp mỗi ngày | Little Star",
    excerpt:
      "Can thiệp ở trung tâm chỉ vài giờ mỗi tuần, phần lớn thời gian con ở bên cha mẹ. Gợi ý các hoạt động cụ thể giúp bạn biến sinh hoạt hằng ngày thành cơ hội can thiệp.",
    date: "2026-07-30",
    readTime: "8 phút đọc",
    cover: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=1200&q=80",
    tags: ["Đồng hành tại nhà", "Kiến thức cha mẹ"],
    content: [
      {
        paragraphs: [
          "Một trong những hiểu lầm phổ biến là “gửi con đến trung tâm là đủ”. Thực tế, con chỉ can thiệp vài giờ mỗi tuần tại trung tâm, còn phần lớn thời gian là ở nhà cùng cha mẹ. Chính những khoảnh khắc đời thường — lúc ăn, lúc tắm, lúc chơi — mới là nơi con luyện tập nhiều nhất. Cha mẹ không cần trở thành chuyên gia, chỉ cần biết cách biến sinh hoạt hằng ngày thành cơ hội học tập.",
        ],
      },
      {
        heading: "4 nguyên tắc vàng khi dạy con tại nhà",
        list: [
          "Đi theo hứng thú của con: bắt đầu từ thứ con đang thích, con sẽ hợp tác hơn nhiều so với khi bị ép.",
          "Chờ đợi có chủ đích: sau khi hỏi hoặc đưa ra tình huống, hãy dừng lại 5–10 giây để con có cơ hội phản hồi, đừng vội làm thay.",
          "Khen ngợi cụ thể và ngay lập tức: thay vì 'giỏi lắm', hãy nói 'con chỉ tay vào quả bóng, giỏi quá!' để con hiểu chính xác mình được khen vì điều gì.",
          "Giảm nhiễu: tắt TV, cất bớt đồ chơi không dùng để con tập trung vào hoạt động và vào bạn.",
        ],
      },
      {
        heading: "Hoạt động phát triển ngôn ngữ",
        paragraphs: [
          "Ngôn ngữ phát triển tốt nhất trong giao tiếp thật, không phải qua màn hình. Vài cách đơn giản:",
        ],
        list: [
          "Tường thuật (self-talk & parallel-talk): nói ra điều bạn và con đang làm — 'Mẹ rót nước', 'Con cầm thìa'. Con nghe từ ngữ gắn với hành động thật.",
          "Tạo cơ hội để con phải giao tiếp: để món con thích ở nơi con thấy nhưng không với tới, để con phải nhìn/chỉ/nói mới lấy được.",
          "Cho lựa chọn: giơ hai món và hỏi 'Con muốn táo hay chuối?' thay vì đưa luôn — con học cách thể hiện mong muốn.",
          "Đọc sách tương tác: không đọc suông mà chỉ tranh, đặt câu hỏi, chờ con phản hồi.",
        ],
      },
      {
        heading: "Hoạt động phát triển tương tác & giao tiếp mắt",
        list: [
          "Chơi luân phiên (lượt của mẹ – lượt của con) với bóng, xếp hình, thổi bong bóng.",
          "Trò chơi bắt chước: vỗ tay, làm mặt hề, con bắt chước bạn và ngược lại.",
          "Các trò 'chờ đợi vui': cù, 'ú oà', đẩy đu — dừng lại giữa chừng để con nhìn bạn ra hiệu 'làm tiếp đi'.",
        ],
      },
      {
        heading: "Vận động & cảm giác",
        paragraphs: [
          "Vận động giúp con điều hoà cơ thể và sẵn sàng học tập hơn. Cho con bò, trườn, nhảy, chơi cát/nước, nặn đất — vừa vui vừa phát triển vận động tinh và điều hoà cảm giác.",
        ],
      },
      {
        heading: "Điều quan trọng nhất: kiên nhẫn và nhất quán",
        paragraphs: [
          "Tiến bộ của trẻ đặc biệt thường theo đường xoắn ốc, có lúc nhanh lúc chậm. Đừng so sánh con với trẻ khác, hãy so với chính con của tháng trước. Hãy giữ liên lạc thường xuyên với chuyên viên để được hướng dẫn đúng mục tiêu ở từng giai đoạn — sự phối hợp giữa gia đình và trung tâm luôn cho kết quả tốt nhất.",
        ],
      },
    ],
  },
  {
    slug: "cong-cu-danh-gia-phat-trien-mchat-denver-cars-pep3",
    title: "Các công cụ đánh giá phát triển: M-CHAT, Denver II, CARS, PEP-3 nói lên điều gì?",
    metaTitle: "Công cụ đánh giá trẻ tự kỷ: M-CHAT, Denver, CARS, PEP-3 | Little Star",
    excerpt:
      "Trước khi can thiệp, trẻ cần được đánh giá. Nhưng các thang đo M-CHAT, Denver II, CARS, PEP-3 là gì và cho biết điều gì về con? Giải thích dễ hiểu cho cha mẹ.",
    date: "2026-07-30",
    readTime: "6 phút đọc",
    cover: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80",
    tags: ["Đánh giá", "Kiến thức cha mẹ"],
    content: [
      {
        paragraphs: [
          "Nhiều cha mẹ e ngại việc đưa con đi đánh giá vì sợ con bị 'dán nhãn'. Nhưng đánh giá không phải để gắn mác — nó giúp hiểu con đang ở đâu, mạnh yếu ra sao, để xây dựng lộ trình phù hợp. Dưới đây là những công cụ chuẩn hoá thường được sử dụng.",
        ],
      },
      {
        heading: "M-CHAT — Sàng lọc tự kỷ sớm",
        paragraphs: [
          "M-CHAT (Modified Checklist for Autism in Toddlers) là bảng hỏi dành cho cha mẹ, dùng để sàng lọc nguy cơ tự kỷ ở trẻ 16–30 tháng. Đây là bước sàng lọc ban đầu, nhanh và không xâm lấn. Kết quả 'nguy cơ cao' không có nghĩa con chắc chắn tự kỷ, mà là dấu hiệu cần đánh giá chuyên sâu hơn.",
        ],
      },
      {
        heading: "Denver II — Sàng lọc phát triển toàn diện",
        paragraphs: [
          "Denver II đánh giá sự phát triển của trẻ 0–6 tuổi trên 4 lĩnh vực: cá nhân – xã hội, vận động tinh, ngôn ngữ, và vận động thô. Công cụ này giúp xác định con có chậm ở lĩnh vực nào so với mốc tuổi, từ đó khoanh vùng cần hỗ trợ.",
        ],
      },
      {
        heading: "CARS — Đánh giá mức độ tự kỷ",
        paragraphs: [
          "CARS (Childhood Autism Rating Scale) do chuyên viên thực hiện qua quan sát, giúp xác định trẻ có tự kỷ hay không và ở mức độ nào (nhẹ, trung bình, nặng). Đây là công cụ hỗ trợ chẩn đoán, không thay thế kết luận của bác sĩ chuyên khoa.",
        ],
      },
      {
        heading: "PEP-3 — Đánh giá để lập chương trình học",
        paragraphs: [
          "PEP-3 (Psychoeducational Profile) tập trung vào việc lập kế hoạch giáo dục cá nhân (IEP). Thay vì chỉ 'có/không', PEP-3 cho biết con đang làm được gì, gần làm được gì — từ đó chuyên viên đặt mục tiêu vừa sức để con tiến bộ từng bước.",
        ],
      },
      {
        heading: "Đánh giá là điểm khởi đầu, không phải bản án",
        paragraphs: [
          "Không một con số hay thang đo nào định nghĩa toàn bộ con bạn. Đánh giá chỉ là tấm bản đồ giúp cả gia đình và chuyên viên biết bắt đầu từ đâu và đi theo hướng nào. Và bản đồ ấy sẽ được cập nhật liên tục khi con tiến bộ — tại Little Star, chúng tôi đánh giá lại định kỳ để điều chỉnh mục tiêu cho phù hợp.",
        ],
      },
    ],
  },
  {
    slug: "roi-loan-dieu-hoa-cam-giac-va-hoat-dong-tri-lieu-ot",
    title: "Rối loạn điều hòa cảm giác ở trẻ: dấu hiệu và vai trò của hoạt động trị liệu (OT)",
    metaTitle: "Rối loạn điều hòa cảm giác ở trẻ & hoạt động trị liệu OT | Little Star",
    excerpt:
      "Con bịt tai khi nghe tiếng động, không chịu mặc quần áo có nhãn mác, hoặc lúc nào cũng chạy nhảy va chạm? Có thể con đang gặp khó khăn về điều hòa cảm giác.",
    date: "2026-07-28",
    readTime: "6 phút đọc",
    cover: "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=1200&q=80",
    tags: ["Điều hòa cảm giác", "Hoạt động trị liệu"],
    content: [
      {
        paragraphs: [
          "Mỗi giây, não chúng ta tiếp nhận vô số thông tin từ các giác quan và tự động 'lọc' để phản ứng phù hợp. Ở một số trẻ, quá trình này gặp trục trặc — gọi là rối loạn điều hòa cảm giác. Điều này ảnh hưởng lớn đến sinh hoạt, cảm xúc và khả năng học tập của con.",
        ],
      },
      {
        heading: "Điều hòa cảm giác là gì?",
        paragraphs: [
          "Là khả năng tiếp nhận, xử lý và phản ứng phù hợp với các thông tin cảm giác: âm thanh, ánh sáng, xúc giác, mùi vị, chuyển động và cảm nhận cơ thể. Khi khả năng này bị rối loạn, trẻ có thể phản ứng quá mức hoặc quá thờ ơ với những kích thích bình thường.",
        ],
      },
      {
        heading: "Dấu hiệu trẻ NHẠY CẢM quá mức (né tránh)",
        list: [
          "Bịt tai, hoảng sợ với tiếng ồn thông thường (máy sấy, máy hút bụi)",
          "Khó chịu với nhãn mác quần áo, không thích bị chạm, ôm",
          "Kén ăn nghiêm trọng về kết cấu thức ăn",
          "Sợ hãi các hoạt động đu đưa, leo trèo, thăng bằng",
        ],
      },
      {
        heading: "Dấu hiệu trẻ KÉM nhạy (tìm kiếm cảm giác)",
        list: [
          "Liên tục chạy nhảy, va chạm, xô đẩy, thích đâm sầm vào đồ vật",
          "Thích quay tròn, đu đưa mà không chóng mặt",
          "Hay cho đồ vật vào miệng, cắn, gặm dù đã lớn",
          "Dường như không nhận ra đau hoặc bẩn",
        ],
      },
      {
        heading: "Hoạt động trị liệu (OT) giúp gì?",
        paragraphs: [
          "Chuyên viên hoạt động trị liệu (Occupational Therapist) đánh giá hồ sơ cảm giác của trẻ và thiết kế các hoạt động giúp hệ thần kinh 'học' cách điều hòa tốt hơn — ví dụ các bài tập vận động, ép sâu, thăng bằng, chơi với các kết cấu khác nhau. Mục tiêu là giúp con bình tĩnh, tập trung và tham gia sinh hoạt dễ dàng hơn.",
        ],
      },
      {
        heading: "Cha mẹ có thể hỗ trợ tại nhà",
        list: [
          "Tạo 'góc bình yên' ít kích thích để con nghỉ khi quá tải",
          "Cho con vận động mạnh có kiểm soát: bò, nhảy, đẩy vật nặng nhẹ nhàng",
          "Báo trước các thay đổi và kích thích lớn để con chuẩn bị",
          "Trao đổi với chuyên viên OT để có 'thực đơn cảm giác' phù hợp riêng cho con",
        ],
      },
    ],
  },
  {
    slug: "chuan-bi-cho-con-hoa-nhap-mam-non-tieu-hoc",
    title: "Chuẩn bị cho con hòa nhập mầm non, tiểu học: lộ trình cho trẻ có nhu cầu đặc biệt",
    metaTitle: "Chuẩn bị cho trẻ đặc biệt hòa nhập mầm non, tiểu học | Little Star",
    excerpt:
      "Hòa nhập là đích đến của hầu hết hành trình can thiệp. Nhưng đưa con vào lớp học bình thường quá sớm hoặc thiếu chuẩn bị có thể phản tác dụng. Đây là lộ trình hợp lý.",
    date: "2026-07-26",
    readTime: "7 phút đọc",
    cover: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&q=80",
    tags: ["Hòa nhập", "Tiền học đường"],
    content: [
      {
        paragraphs: [
          "Khi con đã tiến bộ, câu hỏi lớn của cha mẹ là: 'Bao giờ con có thể đi học bình thường?'. Hòa nhập là mục tiêu đẹp, nhưng thành công hay không phụ thuộc rất nhiều vào sự chuẩn bị. Đưa con vào lớp 30 bạn khi con chưa sẵn sàng có thể khiến con thất bại và mất tự tin.",
        ],
      },
      {
        heading: "Những kỹ năng con cần trước khi hòa nhập",
        list: [
          "Kỹ năng tự phục vụ cơ bản: tự ăn, tự đi vệ sinh, tự mặc/cởi đồ đơn giản",
          "Tuân theo hướng dẫn nhóm: làm theo yêu cầu chung của cô, không cần nhắc riêng",
          "Kỹ năng chờ đợi và luân phiên: ngồi yên một khoảng thời gian, chờ đến lượt",
          "Giao tiếp chức năng: biết thể hiện nhu cầu (đi vệ sinh, đói, đau) bằng lời hoặc cách con có",
        ],
      },
      {
        heading: "Chuẩn bị theo từng bước, không vội",
        paragraphs: [
          "Lộ trình hợp lý là tăng dần độ khó của môi trường xã hội:",
        ],
        list: [
          "Từ can thiệp 1:1 → nhóm nhỏ 2–3 bé → nhóm lớn hơn tại trung tâm",
          "Giả lập tình huống lớp học: giờ vòng tròn, xếp hàng, giơ tay phát biểu",
          "Cho con làm quen dần với trường hòa nhập: thăm trường, học bán thời gian trước khi học trọn ngày",
        ],
      },
      {
        heading: "Phối hợp với trường và giáo viên",
        paragraphs: [
          "Sự thành công của hòa nhập cần cả nhà trường cùng tham gia. Cha mẹ nên trao đổi thẳng thắn với giáo viên về nhu cầu của con, thống nhất cách hỗ trợ và cách xử lý khi con gặp khó khăn. Một số trẻ cần giáo viên hỗ trợ đi kèm (shadow teacher) trong giai đoạn đầu để làm cầu nối.",
        ],
      },
      {
        heading: "Tôn trọng tốc độ riêng của con",
        paragraphs: [
          "Mỗi đứa trẻ có một nhịp riêng. Có bé hòa nhập hoàn toàn, có bé cần môi trường hỗ trợ lâu hơn — cả hai đều ổn. Điều quan trọng là con được đặt vào môi trường vừa sức để tiếp tục tiến bộ và giữ được sự tự tin. Tại Little Star, chúng tôi đồng hành cùng gia đình trong suốt giai đoạn chuyển tiếp quan trọng này.",
        ],
      },
    ],
  },
];

export const getPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

// Định dạng ngày dạng dd/mm/yyyy cho hiển thị
export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};
