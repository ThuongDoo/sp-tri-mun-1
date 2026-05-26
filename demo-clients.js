// ═══════════════════════════════════════════════════════════════════════════════
// 🧪 DEMO CLIENTS
// Truy cập:  index.html?client=user1      → landing page của user1
//            editor.html?client=user1     → editor pre-fill data user1
//
// Thêm client mới: copy 1 block, đổi key (vd: user3) và điền data
// Format giống CLIENTS_DATA trong data.js
// ═══════════════════════════════════════════════════════════════════════════════
const DEMO_CLIENTS = {
  user1: {
    theme: "teal",
    logo: "🌿",
    brand: "GreenDerm",
    hotline: "0987 654 321",
    phone: "0987654321",
    address: "123 Nguyễn Thị Minh Khai, Q.3, TP.HCM",
    reviews: "1.243",
    zalo: "https://zalo.me/0987654321",
    messenger: "https://m.me/greenderm",
    pageTitle:
      "GreenDerm • Thoát Mụn – Da Khỏe • Tư Vấn Miễn Phí + Voucher 100k",
    stickyCta: "Nhận voucher 100k + soi da miễn phí",
    nav: {
      links: [
        { label: "Vấn đề", href: "#pain" },
        { label: "Giải pháp", href: "#solution" },
        { label: "Khách hàng", href: "#review" },
        { label: "Quy trình", href: "#process" },
        { label: "Đăng ký", href: "#form" },
      ],
      cta: "Tư vấn ngay",
    },
    hero: {
      badge: "Đã giúp 8.742 chị lấy lại làn da tự tin",
      headline1: "Mụn dai dẳng + Da nhạy cảm?",
      headline2: "Thoát mụn chỉ sau 28 ngày",
      subtext:
        "Phương pháp thảo dược cao cấp – Không kháng sinh – Không tái phát",
      subCta: "MIỄN PHÍ soi da + Voucher 100k hôm nay",
      ctaBtn: "👉 Đăng ký soi da MIỄN PHÍ ngay",
      rating: "4.98/5",
      ratingLabel: "đánh giá thật",
      beforeAfterLabel: "Trước → Sau 28 ngày",
      testimonialName: "Chị Lan, 26t",
      testimonialResult: "Mụn hết 95% • Da không còn đỏ",
      trustItems: [
        { icon: "fa-shield-alt", text: "Bảo hành 6 tháng" },
        { icon: "fa-medal", text: "Chứng chỉ Bộ Y tế" },
      ],
    },
    trustBar: [
      "🏆 Top 1 trị mụn thảo dược 2025",
      "🔒 Bảo mật thông tin 100%",
      "🚀 Hơn 8700 khách đã thành công",
    ],
    pain: {
      label: "Bạn có đang gặp phải?",
      heading: "Những nỗi đau mà 99% chị em từng trải qua",
      items: [
        { emoji: "🔥", text: "Mụn viêm, mụn nang, mụn đầu đen" },
        { emoji: "😣", text: "Da đỏ rát, kích ứng mỹ phẩm" },
        { emoji: "💸", text: "Tốn tiền trị nhiều nơi vẫn tái phát" },
        { emoji: "😔", text: "Tự ti, ngại chụp ảnh, ngại ra đường" },
      ],
    },
    solution: {
      headingSuffix: "– Giải pháp dành riêng cho da mụn nhạy cảm",
      subtitle: "Kết hợp thảo dược Việt Nam + Công nghệ laser lạnh không đau",
      cards: [
        {
          title: "Liệu trình thảo dược cao cấp",
          desc: "Kem trị mụn từ lá trầu không, nghệ đen, trà xanh hữu cơ",
          badge: null,
          price: null,
          imgId:
            "https://drive.google.com/file/d/1p_4CmRlvYBBRoRUUX73zrtMK1GLA-wkn/view?usp=sharing",
        },
        {
          title: "Soi da 3D + Cá nhân hóa",
          desc: "Bác sĩ da liễu 10 năm kinh nghiệm tư vấn trực tiếp",
          badge: null,
          price: null,
          imgId: "237",
        },
        {
          title: 'Combo 28 ngày "Da sạch mãi mãi"',
          desc: null,
          badge: "BEST SELLER",
          price: "Chỉ từ 2.990k (giảm 40% hôm nay)",
          imgId: "180",
        },
      ],
    },
    benefits: {
      heading: "Bạn sẽ nhận được gì?",
      items: [
        {
          emoji: "🌿",
          title: "Mụn giảm 90% chỉ sau 4 tuần",
          sub: "Đã được 2.300+ khách xác nhận",
        },
        {
          emoji: "🧴",
          title: "Da không khô, không bong tróc",
          sub: "An toàn cho da nhạy cảm nhất",
        },
        {
          emoji: "🔄",
          title: "Không tái phát trong 6 tháng",
          sub: "Cam kết bằng hợp đồng",
        },
        { emoji: "📸", title: "Tự tin chụp ảnh • Không cần filter", sub: "" },
        {
          emoji: "💰",
          title: "Tiết kiệm 70% so với spa thông thường",
          sub: "",
        },
        {
          emoji: "❤️",
          title: "Nhóm hỗ trợ Zalo 24/7 suốt liệu trình",
          sub: "",
        },
      ],
    },
    reviewsSection: {
      heading: "Khách hàng thật – Kết quả thật",
      morePrefix: "Và còn ",
      moreSuffix: " đánh giá 5 sao khác trên Google & Facebook",
      items: [
        {
          quote:
            "Mụn cystic hết sạch sau 3 tuần. Da mình giờ trắng hồng luôn ạ! Cảm ơn GreenDerm nhiều lắm 💚",
          author: "Chị Minh Thư, 24t • Quận 7",
          imgId: "64",
          afterImgId: "201",
        },
        {
          quote:
            "Mình bị dị ứng mỹ phẩm nặng, sau khi dùng liệu trình da hết đỏ, mụn khô chỉ sau 10 ngày. Bác sĩ siêu tận tình!",
          author: "Chị Ngọc Hà, 29t • Bình Thạnh",
          imgId: "64",
          afterImgId: "201",
        },
      ],
      beforeAfterLabel: "Trước & Sau 28 ngày",
      beforeAfterDay1: "Ngày 1",
      beforeAfterDay28: "Ngày 28 ✨",
      beforeAfterBtn: "Tôi cũng muốn như chị này →",
      beforeAfterMsg: "Cảm ơn bạn đã xem! Bạn cũng sẽ như vậy 💚",
    },
    process: {
      heading: "Quy trình 5 bước đơn giản",
      steps: [
        "Đăng ký soi da online",
        "Bác sĩ gọi video soi da",
        "Nhận phác đồ + sản phẩm",
        "Theo dõi hàng tuần qua Zalo",
        "Da sạch – Tự tin – Nhận quà",
      ],
    },
    offer: {
      label: "Ưu đãi chỉ hôm nay • Hết ngày 25/03",
      heading: "Tư vấn soi da + Voucher 100k • Hoàn toàn MIỄN PHÍ",
      cta: "Nhận ngay ưu đãi 🔥 (Còn 37 suất)",
    },
    form: {
      heading: "Đăng ký soi da miễn phí + nhận voucher 100k",
      subtitle: "Chỉ mất 30 giây • Bác sĩ gọi lại trong 5 phút",
      placeholderName: "Họ và tên *",
      placeholderPhone: "Số điện thoại *",
      placeholderEmail: "Email (không bắt buộc)",
      placeholderProblem:
        "Mô tả tình trạng da của bạn (ví dụ: mụn viêm 2 năm, da dầu...)",
      submitBtn: "🚀 GỬI ĐĂNG KÝ – NHẬN VOUCHER NGAY",
      privacyNote: "Bảo mật tuyệt đối",
      branches: "12 chi nhánh TP.HCM & Hà Nội",
    },
    faq: {
      heading: "Câu hỏi thường gặp",
      items: [
        {
          q: "Liệu trình có đau không?",
          a: "Hoàn toàn không đau. Chúng tôi dùng laser lạnh + thảo dược nên rất dịu nhẹ.",
        },
        {
          q: "Chi phí bao nhiêu?",
          a: "Chỉ từ 2.990k cho combo 28 ngày (đã giảm 40% cho 50 người đầu tiên).",
        },
        {
          q: "Có cam kết hiệu quả không?",
          a: "Có! Hoàn tiền 100% nếu mụn không giảm ≥80% sau 28 ngày.",
        },
      ],
    },
    footer: {
      tagline: "Trị mụn thảo dược • Da nhạy cảm • Uy tín từ 2019",
      discountLabel: "Mã giảm giá hôm nay:",
      discountCode: "FREESKIN100",
      scrollTopBtn: "↑ Về đầu trang",
      copyright: "All rights reserved.",
      footerNote:
        "Chăm sóc da chuyên sâu • Liệu trình cá nhân hoá • Kết quả được cam kết",
    },
    alerts: {
      nameError: "Vui lòng nhập họ tên đầy đủ 💚",
      phoneError: "Số điện thoại chưa đúng 💚",
      successMsg:
        "✅ Đăng ký thành công!\nBác sĩ sẽ gọi cho bạn trong 3-5 phút.\nVoucher 100k đã gửi qua Zalo.\nCảm ơn chị đã tin tưởng GreenDerm ❤️",
    },
  },

  user2: {
    theme: "rose",
    logo: "🌸",
    brand: "BloomSpa",
    hotline: "0912 345 678",
    phone: "0912345678",
    address: "456 Lê Văn Sỹ, Q.Tân Bình, TP.HCM",
    reviews: "2.871",
    zalo: "https://zalo.me/0912345678",
    messenger: "https://m.me/bloomspa",
    pageTitle:
      "BloomSpa • Trẻ Hóa Da – Căng Mịn • Tư Vấn Miễn Phí + Quà Tặng 200k",
    stickyCta: "Nhận quà 200k + tư vấn miễn phí",
    nav: {
      links: [
        { label: "Vấn đề", href: "#pain" },
        { label: "Dịch vụ", href: "#solution" },
        { label: "Khách hàng", href: "#review" },
        { label: "Quy trình", href: "#process" },
        { label: "Đặt lịch", href: "#form" },
      ],
      cta: "Đặt lịch ngay",
    },
    hero: {
      badge: "Đã giúp 12.500+ chị sở hữu làn da tuổi 20",
      headline1: "Da chảy xệ + Nếp nhăn sớm?",
      headline2: "Trẻ hóa da chỉ sau 1 liệu trình",
      subtext: "Công nghệ Hifu Thermage – Không phẫu thuật – Không nghỉ dưỡng",
      subCta: "MIỄN PHÍ tư vấn + Quà tặng 200k hôm nay",
      ctaBtn: "👉 Đặt lịch tư vấn MIỄN PHÍ ngay",
      rating: "4.97/5",
      ratingLabel: "đánh giá thật",
      beforeAfterLabel: "Trước → Sau 1 liệu trình",
      testimonialName: "Chị Hương, 38t",
      testimonialResult: "Da căng mịn • Nếp nhăn giảm rõ rệt",
      trustItems: [
        { icon: "fa-shield-alt", text: "Cam kết hiệu quả" },
        { icon: "fa-medal", text: "Thiết bị nhập khẩu Hàn Quốc" },
      ],
    },
    trustBar: [
      "🏆 Top 1 trẻ hóa da không phẫu thuật 2025",
      "🔒 An toàn – Không xâm lấn",
      "🚀 Hơn 12.500 khách đã hài lòng",
    ],
    pain: {
      label: "Bạn có đang gặp phải?",
      heading: "Nỗi lo của phụ nữ sau tuổi 30",
      items: [
        { emoji: "😟", text: "Da chảy xệ, mất đàn hồi" },
        { emoji: "🪞", text: "Nếp nhăn, rãnh cười, rãnh mũi má" },
        { emoji: "😔", text: "Da xỉn màu, thiếu sức sống" },
        { emoji: "💸", text: "Tốn tiền kem dưỡng mà không hiệu quả" },
      ],
    },
    solution: {
      headingSuffix: "– Công nghệ trẻ hóa không phẫu thuật hàng đầu",
      subtitle:
        "Hifu – Thermage – Filler tự nhiên – Không đau, không nghỉ dưỡng",
      cards: [
        {
          title: "Hifu nâng cơ siêu âm",
          desc: "Nâng cơ, xóa nhăn, thu nhỏ lỗ chân lông bằng siêu âm hội tụ",
          badge: null,
          price: null,
          imgId: "201",
        },
        {
          title: "Thermage RF làm căng da",
          desc: "Kích thích collagen, làm căng da từ sâu bên trong",
          badge: null,
          price: null,
          imgId: "237",
        },
        {
          title: 'Combo "Da 20 tuổi" trọn gói',
          desc: null,
          badge: "HOT DEAL",
          price: "Chỉ từ 4.500k (tiết kiệm 3 triệu)",
          imgId: "180",
        },
      ],
    },
    benefits: {
      heading: "Bạn sẽ nhận được gì?",
      items: [
        {
          emoji: "✨",
          title: "Da căng mịn ngay sau 1 buổi",
          sub: "Hiệu quả kéo dài 12–18 tháng",
        },
        {
          emoji: "🧬",
          title: "Kích thích collagen tự nhiên",
          sub: "Trẻ hóa từ bên trong",
        },
        {
          emoji: "🙅",
          title: "Không phẫu thuật, không nghỉ dưỡng",
          sub: "Làm xong đi làm ngay",
        },
        { emoji: "📸", title: "Tự tin không cần filter", sub: "" },
        { emoji: "💰", title: "Tiết kiệm hơn tiêm filler 60%", sub: "" },
        { emoji: "❤️", title: "Tư vấn sau liệu trình miễn phí", sub: "" },
      ],
    },
    reviewsSection: {
      heading: "Khách hàng thật – Kết quả thật",
      morePrefix: "Và còn ",
      moreSuffix: " đánh giá 5 sao khác trên Google & Facebook",
      items: [
        {
          quote:
            "Sau 1 buổi Hifu, da mình căng hẳn lên! Bạn bè cứ hỏi mình làm gì mà trẻ ra vậy 😍",
          author: "Chị Thu Hà, 35t • Quận 1",
          imgId: "64",
          afterImgId: "201",
        },
        {
          quote:
            "Mình lo lắng lắm nhưng kỹ thuật viên tư vấn rất tận tình. Kết quả vượt cả mong đợi!",
          author: "Chị Bích Vân, 42t • Quận 3",
          imgId: "64",
          afterImgId: "201",
        },
      ],
      beforeAfterLabel: "Trước & Sau 1 liệu trình",
      beforeAfterDay1: "Trước",
      beforeAfterDay28: "Sau ✨",
      beforeAfterBtn: "Tôi cũng muốn như chị này →",
      beforeAfterMsg: "Cảm ơn bạn đã xem! Bạn cũng sẽ như vậy 🌸",
    },
    process: {
      heading: "Quy trình 4 bước đơn giản",
      steps: [
        "Đặt lịch tư vấn online",
        "Bác sĩ thăm khám & lên phác đồ",
        "Thực hiện liệu trình",
        "Chăm sóc sau điều trị",
      ],
    },
    offer: {
      label: "Ưu đãi chỉ hôm nay • Hết tháng này",
      heading: "Tư vấn miễn phí + Quà tặng 200k • Không điều kiện",
      cta: "Nhận quà ngay 🌸 (Còn 20 suất)",
    },
    form: {
      heading: "Đặt lịch tư vấn miễn phí + nhận quà 200k",
      subtitle: "Chỉ mất 30 giây • Chuyên viên liên hệ trong 5 phút",
      placeholderName: "Họ và tên *",
      placeholderPhone: "Số điện thoại *",
      placeholderEmail: "Email (không bắt buộc)",
      placeholderProblem:
        "Bạn muốn cải thiện vấn đề gì? (vd: da chảy xệ, nếp nhăn...)",
      submitBtn: "🌸 ĐẶT LỊCH NGAY – NHẬN QUÀ 200K",
      privacyNote: "Bảo mật tuyệt đối",
      branches: "8 chi nhánh TP.HCM",
    },
    faq: {
      heading: "Câu hỏi thường gặp",
      items: [
        {
          q: "Liệu trình có đau không?",
          a: "Cảm giác tê nhẹ, không đau. Khách hàng có thể đi làm ngay sau khi làm.",
        },
        {
          q: "Hiệu quả kéo dài bao lâu?",
          a: "12–18 tháng tùy cơ địa, duy trì bằng 1 lần touch-up mỗi năm.",
        },
        {
          q: "Phù hợp với độ tuổi nào?",
          a: "Tốt nhất từ 28 tuổi trở lên, hiệu quả cao nhất từ 30–50 tuổi.",
        },
      ],
    },
    footer: {
      tagline: "Trẻ hóa da • Công nghệ Hàn Quốc • Uy tín từ 2018",
      discountLabel: "Mã quà tặng hôm nay:",
      discountCode: "BLOOM200",
      scrollTopBtn: "↑ Về đầu trang",
      copyright: "All rights reserved.",
      footerNote:
        "Công nghệ hiện đại • An toàn tuyệt đối • Kết quả được cam kết",
    },
    alerts: {
      nameError: "Vui lòng nhập họ tên đầy đủ 🌸",
      phoneError: "Số điện thoại chưa đúng 🌸",
      successMsg:
        "✅ Đặt lịch thành công!\nChuyên viên sẽ gọi cho bạn trong 3-5 phút.\nQuà 200k đã gửi qua Zalo.\nCảm ơn chị đã tin tưởng BloomSpa 🌸",
    },
  },
};

// ─── Helper: chuyển CLIENTS_DATA format → editor's d format ──────────────────
function toEditorFormat(c) {
  return {
    ...c,
    trustBarItems: (c.trustBar || []).map((v) => ({ v })),
    process: {
      heading: c.process.heading,
      steps: c.process.steps.map((v) => ({ v })),
    },
  };
}
