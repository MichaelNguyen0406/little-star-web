// ============================================================
//  NỘI DUNG CÁC SECTION THÊM (Đội ngũ · Phương pháp · Cảm nhận · Form)
//  Toàn bộ thông tin dưới đây là GIẢ LẬP — anh thay bằng dữ liệu thật sau.
//  Song ngữ: vi / en. Sửa ở đây, web tự cập nhật.
// ============================================================
import type { Language } from "./translations";

/* ---------- ĐỘI NGŨ ---------- */
export interface TeamMember {
  name: string;
  role: string;
  credential: string;
  photo: string; // TODO: thay bằng ảnh thật (public/images/...)
}

interface TeamContent {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  members: TeamMember[];
}

/* ---------- PHƯƠNG PHÁP ---------- */
export interface MethodItem {
  tag: string;
  name: string;
  description: string;
}

export interface MethodsContent {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  items: MethodItem[];
}

/* ---------- FORM ĐĂNG KÝ ---------- */
interface RegisterContent {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  fields: {
    parent: string;
    phone: string;
    childAge: string;
    note: string;
  };
  placeholders: {
    parent: string;
    phone: string;
    childAge: string;
    note: string;
  };
  submit: string;
  success: string;
}

/* ---------- CƠ SỞ VẬT CHẤT ---------- */
export interface FacilityItem {
  caption: string;
  image: string; // TODO: thay bằng ảnh thật của trung tâm
}

interface FacilitiesContent {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  items: FacilityItem[];
}

interface SectionContent {
  team: TeamContent;
  methods: MethodsContent;
  methodsMamNon: MethodsContent;
  register: RegisterContent;
  facilities: FacilitiesContent;
}

// Ảnh chân dung giả lập (Unsplash) — thay bằng ảnh thật của đội ngũ sau
const teamPhotos = [
  "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
];

export const sections: Record<Language, SectionContent> = {
  vi: {
    team: {
      label: "Đội ngũ",
      title: "Những người thầy",
      titleHighlight: "tận tâm & bài bản",
      description:
        "Đội ngũ đa chuyên ngành: giáo dục đặc biệt, tâm lý, âm ngữ và hoạt động trị liệu — được đào tạo liên tục và hội chẩn từng ca mỗi tuần.",
      members: [
        { name: "Nguyễn Thị Minh Anh", role: "Giám đốc chuyên môn", credential: "Thạc sĩ Giáo dục Đặc biệt", photo: teamPhotos[0] },
        { name: "Trần Thu Hà", role: "Chuyên viên Âm ngữ trị liệu", credential: "Cử nhân Ngôn ngữ trị liệu", photo: teamPhotos[1] },
        { name: "Lê Hoàng Nam", role: "Chuyên viên Tâm lý", credential: "Thạc sĩ Tâm lý lâm sàng", photo: teamPhotos[2] },
        { name: "Phạm Thị Lan", role: "Giáo viên Can thiệp", credential: "Chứng chỉ ABA quốc tế", photo: teamPhotos[3] },
      ],
    },
    methods: {
      label: "Phương pháp",
      title: "Dựa trên khoa học,",
      titleHighlight: "chuẩn quốc tế",
      description:
        "Chúng tôi áp dụng các phương pháp can thiệp được công nhận trên thế giới, lựa chọn phù hợp với từng trẻ.",
      items: [
        { tag: "ABA", name: "Phân tích hành vi ứng dụng", description: "Phương pháp có bằng chứng khoa học mạnh nhất, xây dựng kỹ năng qua từng bước nhỏ và củng cố tích cực." },
        { tag: "ESDM", name: "Mô hình Denver khởi đầu sớm", description: "Can thiệp qua chơi cho trẻ 1–4 tuổi, lồng ghép mục tiêu phát triển vào hoạt động tự nhiên." },
        { tag: "TEACCH", name: "Dạy học có cấu trúc", description: "Sử dụng lịch trình trực quan và môi trường có tổ chức giúp trẻ hiểu và tự chủ hơn." },
        { tag: "PECS", name: "Giao tiếp bằng trao đổi hình", description: "Hệ thống thẻ hình giúp trẻ chưa nói được thể hiện nhu cầu và bắt đầu giao tiếp." },
        { tag: "Floortime", name: "DIR / Floortime", description: "Xây dựng kết nối cảm xúc và tương tác thông qua chính hứng thú của trẻ." },
      ],
    },
    methodsMamNon: {
      label: "Phương pháp",
      title: "Giáo dục mầm non",
      titleHighlight: "tiên tiến",
      description:
        "Chương trình mầm non kết hợp các phương pháp giáo dục sớm hiện đại, giúp con phát triển toàn diện qua trải nghiệm và vui chơi.",
      items: [
        { tag: "Montessori", name: "Học qua giáo cụ", description: "Trẻ tự khám phá với bộ giáo cụ Montessori, rèn tính tự lập, tập trung và kỷ luật nội tâm." },
        { tag: "STEAM", name: "Khoa học & sáng tạo", description: "Học Khoa học – Công nghệ – Kỹ thuật – Nghệ thuật – Toán qua dự án và trải nghiệm thực tế." },
        { tag: "Reggio", name: "Học theo dự án", description: "Lấy trẻ làm trung tâm, khơi gợi tò mò và tư duy qua các dự án theo hứng thú của con." },
        { tag: "Play", name: "Học qua chơi", description: "Vui chơi có định hướng giúp con phát triển ngôn ngữ, vận động và kỹ năng xã hội tự nhiên." },
        { tag: "SEL", name: "Kỹ năng & cảm xúc", description: "Giáo dục cảm xúc – xã hội giúp con tự tin, biết chia sẻ và hợp tác cùng bạn bè." },
      ],
    },
    register: {
      label: "Đăng ký",
      title: "Đăng ký đánh giá",
      titleHighlight: "miễn phí cho con",
      description:
        "Để lại thông tin, chuyên viên của Little Stars sẽ liên hệ tư vấn trong thời gian sớm nhất. Can thiệp càng sớm, cơ hội tiến bộ của con càng lớn.",
      fields: { parent: "Họ tên phụ huynh", phone: "Số điện thoại", childAge: "Tuổi của bé", note: "Điều anh/chị quan tâm" },
      placeholders: { parent: "Nguyễn Văn A", phone: "09xx xxx xxx", childAge: "Ví dụ: 3 tuổi", note: "Con chậm nói, muốn được tư vấn..." },
      submit: "Gửi đăng ký",
      success: "Cảm ơn anh/chị! Little Stars sẽ liên hệ trong thời gian sớm nhất.",
    },
    facilities: {
      label: "Cơ sở vật chất",
      title: "Không gian",
      titleHighlight: "an toàn & truyền cảm hứng",
      description:
        "Môi trường được thiết kế riêng cho trẻ đặc biệt — an toàn, ấm áp và giàu kích thích phát triển: từ phòng can thiệp cá nhân đến khu vận động, điều hòa cảm giác và góc đọc sách.",
      items: [
        { caption: "Phòng can thiệp cá nhân 1:1", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1000&q=80" },
        { caption: "Phòng điều hòa cảm giác", image: "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=800&q=80" },
        { caption: "Khu vận động & vui chơi", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80" },
        { caption: "Góc đọc sách & thư viện", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" },
        { caption: "Phòng học nhóm nhỏ", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80" },
        { caption: "Khu vực ngoài trời", image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80" },
      ],
    },
  },
  en: {
    team: {
      label: "Our team",
      title: "Dedicated,",
      titleHighlight: "well-trained educators",
      description:
        "A multidisciplinary team of special education, psychology, speech and occupational therapy specialists — continuously trained and reviewing each case together every week.",
      members: [
        { name: "Nguyen Thi Minh Anh", role: "Head of Programs", credential: "MA in Special Education", photo: teamPhotos[0] },
        { name: "Tran Thu Ha", role: "Speech & Language Therapist", credential: "BA in Speech Therapy", photo: teamPhotos[1] },
        { name: "Le Hoang Nam", role: "Psychologist", credential: "MA in Clinical Psychology", photo: teamPhotos[2] },
        { name: "Pham Thi Lan", role: "Intervention Teacher", credential: "Certified ABA Practitioner", photo: teamPhotos[3] },
      ],
    },
    methods: {
      label: "Methods",
      title: "Evidence-based,",
      titleHighlight: "global standards",
      description:
        "We apply internationally recognized intervention methods, selecting the right fit for each child.",
      items: [
        { tag: "ABA", name: "Applied Behavior Analysis", description: "The most strongly evidence-based method, building skills step by step with positive reinforcement." },
        { tag: "ESDM", name: "Early Start Denver Model", description: "Play-based intervention for children aged 1–4, weaving goals into natural activities." },
        { tag: "TEACCH", name: "Structured Teaching", description: "Visual schedules and organized environments help children understand and gain independence." },
        { tag: "PECS", name: "Picture Exchange Communication", description: "A picture-card system helping non-verbal children express needs and start communicating." },
        { tag: "Floortime", name: "DIR / Floortime", description: "Building emotional connection and interaction through the child's own interests." },
      ],
    },
    methodsMamNon: {
      label: "Methods",
      title: "Modern early",
      titleHighlight: "education",
      description:
        "Our preschool blends modern early-education approaches so children grow holistically through experience and play.",
      items: [
        { tag: "Montessori", name: "Learning with materials", description: "Children explore with Montessori materials, building independence, focus and inner discipline." },
        { tag: "STEAM", name: "Science & creativity", description: "Science, Technology, Engineering, Arts and Maths through hands-on projects and real experiences." },
        { tag: "Reggio", name: "Project-based learning", description: "Child-led learning that sparks curiosity and thinking through interest-driven projects." },
        { tag: "Play", name: "Play-based learning", description: "Guided play develops language, motor and social skills naturally." },
        { tag: "SEL", name: "Skills & emotions", description: "Social-emotional learning helps children be confident, share and cooperate with friends." },
      ],
    },
    register: {
      label: "Register",
      title: "Book a free",
      titleHighlight: "assessment",
      description:
        "Leave your details and a Little Stars specialist will reach out shortly. The earlier the intervention, the greater your child's chance to progress.",
      fields: { parent: "Parent's name", phone: "Phone number", childAge: "Child's age", note: "What concerns you" },
      placeholders: { parent: "John Doe", phone: "09xx xxx xxx", childAge: "e.g. 3 years", note: "My child has a speech delay..." },
      submit: "Send registration",
      success: "Thank you! Little Stars will contact you shortly.",
    },
    facilities: {
      label: "Facilities",
      title: "Spaces that are",
      titleHighlight: "safe & inspiring",
      description:
        "An environment designed for children with special needs — safe, warm and rich in developmental stimulation: from individual therapy rooms to motor, sensory and reading areas.",
      items: [
        { caption: "1:1 intervention room", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1000&q=80" },
        { caption: "Sensory integration room", image: "https://images.unsplash.com/photo-1526634332515-d56c5fd16991?w=800&q=80" },
        { caption: "Motor & play area", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80" },
        { caption: "Reading & library corner", image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" },
        { caption: "Small-group classroom", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80" },
        { caption: "Outdoor area", image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80" },
      ],
    },
  },
};
