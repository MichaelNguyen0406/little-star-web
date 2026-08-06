import { Phone, MessageCircle, Facebook, Star, Heart, Users, BookOpen, Shield, Calendar, MapPin, Clock, Sparkles, Target, Lightbulb, HandHeart } from "lucide-react";

export type Language = "vi" | "en";

export interface ServiceItem {
  icon: typeof Phone;
  title: string;
  description: string;
}

export interface WhyItem {
  icon: typeof Phone;
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

interface Translation {
  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
    callNow: string;
  };
  hero: {
    subtitle: string;
    title: string;
    titleHighlight: string;
    description: string;
    ctaCall: string;
    ctaZalo: string;
    ctaFacebook: string;
    urgency: string;
  };
  services: {
    label: string;
    title: string;
    items: ServiceItem[];
  };
  concerns: {
    label: string;
    title: string;
    items: string[];
    closing: string;
  };
  whyUs: {
    label: string;
    title: string;
    titleHighlight: string;
    description: string;
    items: WhyItem[];
  };
  process: {
    label: string;
    title: string;
    steps: ProcessStep[];
  };
  about: {
    label: string;
    title: string;
    titleHighlight: string;
    lead: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
    valuesTitle: string;
    values: { title: string; description: string }[];
    teamTitle: string;
    teamText: string;
    ctaButton: string;
  };

  cta: {
    title: string;
    titleHighlight: string;
    description: string;
    phone: string;
    zalo: string;
    address: string;
    hours: string;
    hoursValue: string;
    addressValue: string;
    ctaButton: string;
  };
  footer: {
    description: string;
    links: {
      title: string;
      home: string;
      about: string;
      services: string;
      contact: string;
    };
    services: {
      title: string;
    };
    contact: {
      title: string;
      phone: string;
      zalo: string;
    };
    copyright: string;
  };
}

export const translations: Record<Language, Translation> = {
  vi: {
    nav: {
      home: "Trang chủ",
      about: "Về chúng tôi",
      services: "Dịch vụ",
      contact: "Liên hệ",
      callNow: "Gọi ngay",
    },
    hero: {
      subtitle: "Trung tâm Can thiệp sớm",
      title: "Mỗi đứa trẻ đều là một ngôi sao nhỏ",
      titleHighlight: "cần được nâng đỡ đúng lúc",
      description:
        "Little Stars đồng hành cùng gia đình có con từ 0–6 tuổi thuộc nhóm có nhu cầu giáo dục đặc biệt. Chúng tôi cung cấp đánh giá rõ ràng, lộ trình cá nhân hóa và phương pháp can thiệp có bằng chứng khoa học.",
      ctaCall: "Gọi tư vấn",
      ctaZalo: "Nhắn Zalo",
      ctaFacebook: "Facebook",
      urgency: "Can thiệp càng sớm, cơ hội của con càng lớn — đừng chờ đợi.",
    },
    concerns: {
      label: "Chúng tôi hiểu",
      title: "Những trăn trở của cha mẹ",
      items: [
        "Tôi sợ đánh giá sai, mỗi nơi lại cho một kết quả khác nhau.",
        "Con học một nơi, trị liệu một nơi — không theo lộ trình thống nhất.",
        "Con còn quá nhỏ, tôi không biết khi nào mới là lúc nên can thiệp.",
        "Tôi chỉ mong một nơi an toàn, không ai nhìn con bằng ánh mắt khác biệt.",
        "Tôi muốn con được đồng hành lâu dài, không phải đổi trường liên tục.",
      ],
      closing: "Little Stars ở đây để cùng bạn tháo gỡ từng nỗi lo ấy.",
    },
    services: {
      label: "Dịch vụ",
      title: "Hành trình đồng hành cùng con",
      items: [
        {
          icon: BookOpen,
          title: "Đánh giá & sàng lọc",
          description: "Denver II, M-CHAT, CARS, PEP-3... lập hồ sơ đầu vào toàn diện.",
        },
        {
          icon: Target,
          title: "Can thiệp cá nhân 1:1",
          description: "Theo kế hoạch giáo dục cá nhân (IEP) riêng cho từng bé.",
        },
        {
          icon: MessageCircle,
          title: "Trị liệu ngôn ngữ",
          description: "Hỗ trợ trẻ chậm nói, rối loạn ngôn ngữ và giao tiếp xã hội.",
        },
        {
          icon: Users,
          title: "Hoạt động nhóm & tiền hòa nhập",
          description: "Chuẩn bị kỹ năng để trẻ tự tin hòa nhập mầm non, tiểu học.",
        },
        {
          icon: HandHeart,
          title: "OT & điều hòa cảm giác",
          description: "Tăng cường vận động, tự chăm sóc và điều hòa cảm giác.",
        },
        {
          icon: Heart,
          title: "Đồng hành gia đình",
          description: "Hướng dẫn phụ huynh can thiệp tại nhà và cập nhật tiến độ.",
        },
      ],
    },
    whyUs: {
      label: "Tại sao chọn Little Stars",
      title: "Khoa học của trái tim",
      titleHighlight: "chuyên nghiệp nhưng ấm áp",
      description:
        "Chúng tôi kết hợp chuyên môn vận hành bằng chứng với sự đồng cảm, để mỗi gia đình cảm thấy được lắng nghe, trấn an và dẫn dắt.",
      items: [
        {
          icon: Shield,
          title: "Phương pháp quốc tế",
          description: "ABA, ESDM, TEACCH, PECS, Floortime — các phương pháp có bằng chứng khoa học.",
        },
        {
          icon: Users,
          title: "Đội ngũ đa chuyên ngành",
          description: "Giáo viên giáo dục đặc biệt, trị liệu ngôn ngữ, tâm lý và chuyên gia OT.",
        },
        {
          icon: Sparkles,
          title: "Cá nhân hóa thật sự",
          description: "Mỗi bé một lộ trình, được đánh giá lại định kỳ để điều chỉnh phù hợp.",
        },
        {
          icon: Heart,
          title: "Lấy gia đình làm trung tâm",
          description: "Ấm áp, minh bạch và đồng hành cùng cha mẹ trong suốt hành trình.",
        },
        {
          icon: MapPin,
          title: "Không gian chuẩn giác quan",
          description: "Lớp học được thiết kế có chủ đích, tối ưu cho cảm xúc và giác quan của trẻ.",
        },
      ],
    },
    process: {
      label: "Quy trình",
      title: "6 bước đồng hành",
      steps: [
        {
          title: "Tư vấn",
          description: "Lắng nghe, giải đáp thắc mắc và hiểu nhu cầu của gia đình.",
        },
        {
          title: "Đánh giá",
          description: "Sàng lọc và đánh giá toàn diện năng lực phát triển của trẻ.",
        },
        {
          title: "Lộ trình (IEP)",
          description: "Xây dựng kế hoạch giáo dục cá nhân với mục tiêu cụ thể.",
        },
        {
          title: "Can thiệp",
          description: "Triển khai can thiệp 1:1, nhóm và hướng dẫn gia đình tại nhà.",
        },
        {
          title: "Đánh giá lại",
          description: "Theo dõi tiến độ, điều chỉnh mục tiêu và phương pháp định kỳ.",
        },
        {
          title: "Hòa nhập",
          description: "Hỗ trợ trẻ tự tin hòa nhập môi trường mầm non và tiểu học.",
        },
      ],
    },
    about: {
      label: "Về chúng tôi",
      title: "Little Stars —",
      titleHighlight: "nơi những bước đi đầu tiên được nâng niu",
      lead: "Trung tâm can thiệp sớm cho trẻ 0–6 tuổi có nhu cầu giáo dục đặc biệt, xây dựng trên nền tảng đánh giá bài bản, phương pháp có bằng chứng khoa học và sự đồng hành thật sự cùng gia đình.",
      paragraphs: [
        "Little Stars được thành lập bởi những nhà giáo dục và trị liệu viên đã nhiều năm đi cùng các gia đình có con khác biệt về phát triển. Chúng tôi thấy một điều lặp lại: cha mẹ nhận ra dấu hiệu rất sớm, nhưng không biết bắt đầu từ đâu — và những tháng vàng cứ thế trôi qua.",
        "Vì vậy chúng tôi tạo ra một nơi mà cuộc trò chuyện đầu tiên đã rõ ràng và ấm áp; mỗi trẻ có một lộ trình riêng thay vì một chương trình chung; và cha mẹ được hướng dẫn để tiếp tục can thiệp tại nhà. Tiến bộ của con được đo lường, rà soát và chia sẻ minh bạch từng tháng.",
      ],
      stats: [
        { value: "0–6", label: "Độ tuổi vàng" },
        { value: "1:1", label: "Can thiệp cá nhân" },
        { value: "100%", label: "Lộ trình riêng" },
        { value: "24h", label: "Phản hồi phụ huynh" },
      ],
      missionTitle: "Sứ mệnh",
      missionText:
        "Kiến tạo những chương trình can thiệp sớm khoa học và cá nhân hoá cho trẻ có nhu cầu giáo dục đặc biệt; đồng thời trang bị cho mỗi gia đình kiến thức và sự tự tin để cùng con vững bước — giúp mỗi trẻ phát huy tối đa tiềm năng và tiến gần hơn tới cuộc sống hoà nhập, độc lập.",
      visionTitle: "Tầm nhìn",
      visionText:
        "Trở thành trung tâm can thiệp sớm được tin tưởng hàng đầu, tiên phong ứng dụng các phương pháp giáo dục đặc biệt chuẩn quốc tế; góp phần xây dựng một cộng đồng thấu hiểu, không định kiến, nơi mọi trẻ đặc biệt đều có cơ hội phát triển bình đẳng.",
      valuesTitle: "Giá trị cốt lõi",
      values: [
        {
          title: "Tận tâm & Nhân văn",
          description:
            "Đặt sự phát triển và hạnh phúc của trẻ làm trọng tâm trong mọi quyết định, bằng tình yêu thương và sự tôn trọng từng khác biệt.",
        },
        {
          title: "Chuyên môn & Khoa học",
          description:
            "Ứng dụng các phương pháp có bằng chứng khoa học (ABA, ESDM, TEACCH…), thực hiện bởi đội ngũ được đào tạo bài bản và cập nhật liên tục.",
        },
        {
          title: "Cá nhân hoá",
          description:
            "Mỗi trẻ là một cá thể riêng biệt với lộ trình can thiệp được thiết kế riêng, không rập khuôn theo một giáo trình chung.",
        },
        {
          title: "Minh bạch & Đồng hành",
          description:
            "Mục tiêu rõ ràng, đánh giá định kỳ và báo cáo trung thực; luôn xem cha mẹ là người đồng hành quan trọng nhất của con.",
        },
      ],
      teamTitle: "Đội ngũ",
      teamText:
        "Giáo viên giáo dục đặc biệt, chuyên viên âm ngữ trị liệu và chuyên viên hành vi — được đào tạo liên tục và hội chẩn từng ca mỗi tuần.",
      ctaButton: "Trò chuyện với chúng tôi",
    },
    cta: {

      title: "Đừng để con",
      titleHighlight: "chờ đợi",
      description:
        "Giai đoạn 0–6 tuổi là 'giai đoạn vàng' phát triển não bộ. Liên hệ ngay để được tư vấn miễn phí.",
      phone: "Hotline",
      zalo: "Zalo",
      address: "Địa chỉ",
      hours: "Giờ làm việc",
      hoursValue: "Thứ 2–Thứ 7: 7h30–17h00",
      addressValue:
        "M5-42 khu Manhattan Glory, Vinhomes Grand Park, 512 Nguyễn Xiển, KP. Long Hòa, P. Long Bình, TP. HCM",
      ctaButton: "Nhận tư vấn miễn phí",
    },
    footer: {
      description: "Trung tâm can thiệp sớm dành cho trẻ có nhu cầu giáo dục đặc biệt từ 0–6 tuổi.",
      links: {
        title: "Liên kết",
        home: "Trang chủ",
        about: "Về chúng tôi",
        services: "Dịch vụ",
        contact: "Liên hệ",
      },
      services: {
        title: "Dịch vụ",
      },
      contact: {
        title: "Liên hệ",
        phone: "Hotline",
        zalo: "Zalo",
      },
      copyright: "© {year} Little Stars. Mọi quyền được bảo lưu.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      callNow: "Call now",
    },
    hero: {
      subtitle: "Early Intervention Center",
      title: "Every child is a little star",
      titleHighlight: "waiting to shine at the right time",
      description:
        "Little Stars partners with families of children aged 0–6 with special educational needs. We provide clear assessments, personalized learning plans, and evidence-based interventions.",
      ctaCall: "Call us",
      ctaZalo: "Message Zalo",
      ctaFacebook: "Facebook",
      urgency: "The earlier the intervention, the brighter the child's future — don't wait.",
    },
    concerns: {
      label: "We understand",
      title: "The worries every parent carries",
      items: [
        "I'm afraid of a wrong assessment — every place gives a different result.",
        "My child learns in one place and gets therapy in another, with no unified plan.",
        "My child is so young; I don't know when the right time to intervene is.",
        "I just want a safe place where no one looks at my child differently.",
        "I want long-term support, not switching schools over and over.",
      ],
      closing: "Little Stars is here to work through each of these worries with you.",
    },
    services: {
      label: "Services",
      title: "A journey alongside your child",
      items: [
        {
          icon: BookOpen,
          title: "Assessment & Screening",
          description: "Denver II, M-CHAT, CARS, PEP-3 and comprehensive intake records.",
        },
        {
          icon: Target,
          title: "1:1 Individual Intervention",
          description: "Personalized Education Program (IEP) tailored to each child.",
        },
        {
          icon: MessageCircle,
          title: "Speech Therapy",
          description: "Support for late talkers, language disorders, and social communication.",
        },
        {
          icon: Users,
          title: "Group & Pre-inclusion",
          description: "Building skills so children can confidently join preschool and school.",
        },
        {
          icon: HandHeart,
          title: "OT & Sensory Regulation",
          description: "Strengthening motor skills, self-care, and sensory regulation.",
        },
        {
          icon: Heart,
          title: "Family Support",
          description: "Guiding parents with home intervention and regular progress updates.",
        },
      ],
    },
    whyUs: {
      label: "Why Little Stars",
      title: "The science of the heart",
      titleHighlight: "professional yet warm",
      description:
        "We combine evidence-based practice with empathy, so every family feels heard, reassured, and guided.",
      items: [
        {
          icon: Shield,
          title: "International Methods",
          description: "ABA, ESDM, TEACCH, PECS, Floortime — research-backed approaches.",
        },
        {
          icon: Users,
          title: "Multidisciplinary Team",
          description: "Special educators, speech therapists, psychologists, and OT specialists.",
        },
        {
          icon: Sparkles,
          title: "Truly Personalized",
          description: "Each child has a unique plan, reviewed and adjusted regularly.",
        },
        {
          icon: Heart,
          title: "Family-Centered",
          description: "Warm, transparent, and walking alongside parents every step of the way.",
        },
        {
          icon: MapPin,
          title: "Sensory-Ready Spaces",
          description: "Classrooms designed with intention, optimized for children's emotions and senses.",
        },
      ],
    },
    process: {
      label: "Our Process",
      title: "6 steps of partnership",
      steps: [
        {
          title: "Consultation",
          description: "Listen, answer questions, and understand the family's needs.",
        },
        {
          title: "Assessment",
          description: "Screen and comprehensively evaluate the child's developmental abilities.",
        },
        {
          title: "IEP Plan",
          description: "Create an Individualized Education Program with specific goals.",
        },
        {
          title: "Intervention",
          description: "Deliver 1:1, group sessions, and family guidance at home.",
        },
        {
          title: "Re-evaluation",
          description: "Track progress, adjust goals and methods on a regular basis.",
        },
        {
          title: "Inclusion",
          description: "Support children to confidently integrate into preschool and primary school.",
        },
      ],
    },
    about: {
      label: "About us",
      title: "Little Stars —",
      titleHighlight: "where first steps are cherished",
      lead: "An early intervention centre for children aged 0–6 with special educational needs, built on assessment, evidence-based methods and true partnership with families.",
      paragraphs: [
        "Little Stars was founded by educators and therapists who have spent years alongside families of children with developmental differences. We saw the same pattern again and again: parents notice something early, but do not know where to begin — and precious months slip away.",
        "So we built a place where the first conversation is clear and kind, where every child receives an individual plan instead of a generic programme, and where parents are trained to continue the work at home. Progress is measured, reviewed and shared openly, month after month.",
      ],
      stats: [
        { value: "0–6", label: "Golden age served" },
        { value: "1:1", label: "Individual sessions" },
        { value: "100%", label: "Personalised plans" },
        { value: "24h", label: "Response to families" },
      ],
      missionTitle: "Our mission",
      missionText:
        "To design scientific, personalised early-intervention programmes for children with special educational needs, and to equip every family with the knowledge and confidence to walk beside their child — helping each child reach their fullest potential and move closer to an independent, inclusive life.",
      visionTitle: "Our vision",
      visionText:
        "To become a leading, trusted early-intervention centre, pioneering the application of international-standard special education methods; and to help build an understanding, stigma-free community where every child has an equal opportunity to grow.",
      valuesTitle: "Our core values",
      values: [
        {
          title: "Compassion & Humanity",
          description:
            "We place each child's growth and happiness at the heart of every decision, with love and genuine respect for every difference.",
        },
        {
          title: "Expertise & Science",
          description:
            "We apply evidence-based methods (ABA, ESDM, TEACCH…), delivered by a team that is rigorously trained and continuously updated.",
        },
        {
          title: "Personalisation",
          description:
            "Every child is unique and receives an individually designed intervention plan — never a one-size-fits-all curriculum.",
        },
        {
          title: "Transparency & Partnership",
          description:
            "Clear goals, regular assessment and honest reporting; we always treat parents as the most important partner in their child's journey.",
        },
      ],
      teamTitle: "Our team",
      teamText:
        "Special education teachers, speech and language therapists and behaviour specialists who train continuously and review each case together every week.",
      ctaButton: "Talk to us",
    },
    cta: {

      title: "Don't let your child",
      titleHighlight: "wait",
      description:
        "Ages 0–6 are the 'golden window' for brain development. Contact us today for a free consultation.",
      phone: "Hotline",
      zalo: "Zalo",
      address: "Address",
      hours: "Working hours",
      hoursValue: "Mon–Sat: 7:30–17:00",
      addressValue:
        "M5-42 Manhattan Glory, Vinhomes Grand Park, 512 Nguyen Xien, Long Binh Ward, HCMC",
      ctaButton: "Get free consultation",
    },
    footer: {
      description: "Early intervention center for children with special educational needs aged 0–6.",
      links: {
        title: "Links",
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
      },
      services: {
        title: "Services",
      },
      contact: {
        title: "Contact",
        phone: "Hotline",
        zalo: "Zalo",
      },
      copyright: "© {year} Little Stars. All rights reserved.",
    },
  },
};

// ============================================================
//  THÔNG TIN LIÊN HỆ — SỬA MỘT CHỖ, TOÀN WEB TỰ CẬP NHẬT
// ============================================================
export const contactInfo = {
  // === Thông tin giả lập — anh thay bằng thông tin thật sau ===
  // Số hiển thị trên web
  phone: "0901 234 567",
  // Dạng chỉ chữ số có mã quốc gia (84...), dùng cho nút gọi tel: và Zalo
  phoneDigits: "84901234567",
  zaloDigits: "84901234567",
  phoneLabel: "Hotline",
  // Email liên hệ
  email: "lienhe@littlestar.edu.vn",
  // Link Facebook
  facebook: "https://facebook.com/littlestar",
  // Địa chỉ thật của Little Stars
  address:
    "M5-42 khu Manhattan Glory, Vinhomes Grand Park, 512 Nguyễn Xiển, KP. Long Hòa, P. Long Bình, TP. HCM",
  hours: "Thứ 2–Thứ 7: 7h30–17h00",
};
