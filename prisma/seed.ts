import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database with authentic profile data for Suhail Nasr...");

  // 1. Admin User
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash("Atelier@Suhail2026", salt);

  const admin = await prisma.user.upsert({
    where: { email: "admin@suhailnasr.art" },
    update: {},
    create: {
      email: "admin@suhailnasr.art",
      name: "سهيل نصر",
      passwordHash,
      role: "admin",
    },
  });

  // 2. Artist Profile
  await prisma.artistProfile.upsert({
    where: { id: "artist-suhail" },
    update: {
      profileImage: "/images/suhail-portrait.jpg",
      coverImage: "/images/hero-calligraphy.jpg",
      phone: "+966553172286",
      whatsapp: "966553172286",
      snapchatUrl: "https://www.snapchat.com/@Sohilnasr7",
      instagramUrl: "https://www.instagram.com/sohil.nassr",
      tiktokUrl: "https://www.tiktok.com/@.sohil_nassr77",
    },
    create: {
      id: "artist-suhail",
      nameAr: "الخطاط سهيل نصر",
      nameEn: "Suhail Nasr",
      titleAr: "خطاط وفنان للحرف العربي",
      titleEn: "Arabic Calligrapher & Lettering Artist",
      bioAr:
        "خطاط عربي مقيم في الرياض، متفرد في نقل الحرف العربي من الورق التقليدي إلى أبعاد وخامات حية كالحفر على الزجاج، الحرق على الخشب، ونقش الإهداءات على السبح والأكواب والمخمل، ليكون العمل أثراً باقياً يفيض بالأصالة والجمال المعاصر.",
      bioEn:
        "Saudi-based Arabic calligrapher and lettering artist working from Riyadh, specializing in transcending traditional paper onto bespoke living materials including glass engraving, wood burning, prayer beads, and velvet.",
      philosophyAr: "حين يصبح الحرف أثراً.",
      philosophyEn: "When the letter becomes an imprint.",
      profileImage: "/images/suhail-portrait.jpg",
      coverImage: "/images/hero-calligraphy.jpg",
      phone: "+966553172286",
      whatsapp: "966553172286",
      snapchatUrl: "https://www.snapchat.com/@Sohilnasr7",
      instagramUrl: "https://www.instagram.com/sohil.nassr",
      tiktokUrl: "https://www.tiktok.com/@.sohil_nassr77",
      location: "الرياض، المملكة العربية السعودية",
      seoTitle: "الخطاط سهيل نصر — معرض أعمال الخط العربي والأتيليه الرقمي",
      seoDescription:
        "المعرض الرسمي للخطاط سهيل نصر في الرياض. استعراض الأعمال الفنية على الزجاج والخشب والسبح، وطلب الأعمال الحروفية المخصصة.",
    },
  });

  // 3. Site Settings
  await prisma.siteSettings.upsert({
    where: { id: "default" },
    update: {
      contactPhone: "+966 55 317 2286",
      contactWhatsapp: "966553172286",
      snapchatUrl: "https://www.snapchat.com/@Sohilnasr7",
      instagramUrl: "https://www.instagram.com/sohil.nassr",
      tiktokUrl: "https://www.tiktok.com/@.sohil_nassr77",
    },
    create: {
      id: "default",
      siteNameAr: "الخطاط سهيل نصر",
      siteNameEn: "Suhail Nasr Calligraphy Atelier",
      taglineAr: "حين يصبح الحرف أثراً.",
      taglineEn: "When the letter becomes an imprint.",
      contactPhone: "+966 55 317 2286",
      contactWhatsapp: "966553172286",
      snapchatUrl: "https://www.snapchat.com/@Sohilnasr7",
      instagramUrl: "https://www.instagram.com/sohil.nassr",
      tiktokUrl: "https://www.tiktok.com/@.sohil_nassr77",
      location: "الرياض، المملكة العربية السعودية",
    },
  });

  // 4. Materials (Verified from artist profile)
  const materialsData = [
    {
      nameAr: "الزجاج",
      nameEn: "Glass",
      slug: "glass",
      descriptionAr:
        "حفر يدوي دقيق وانعكاسات ضوئية شفافة تجعل الحرف يطفو في فضاء القطعة مع الحفاظ على صفاء المادة.",
    },
    {
      nameAr: "الخشب",
      nameEn: "Wood",
      slug: "wood",
      descriptionAr:
        "حرق وحفر وتذهيب على أخشاب طبيعية معتقة تتفاعل عروقها الدافئة مع انحناءات الحرف العربي.",
    },
    {
      nameAr: "المخمل",
      nameEn: "Velvet",
      slug: "velvet",
      descriptionAr:
        "أثر عميق وملمس غني وثير يمنح التركيبات الخطية فخامة بصرية وظلالاً متباينة.",
    },
    {
      nameAr: "السجاد",
      nameEn: "Carpets",
      slug: "carpets",
      descriptionAr:
        "تراكيب حروفية منسوجة ومحروقة تخلد النصوص التراثية في سياق تشكيلي باذخ.",
    },
    {
      nameAr: "الأكواب",
      nameEn: "Cups",
      slug: "cups",
      descriptionAr:
        "تخطيط فني مخصص ونقش يدوي على الأكواب والخزف ليرافق الحرف تفاصيل اليوم المتجددة.",
    },
    {
      nameAr: "السبح",
      nameEn: "Prayer Beads",
      slug: "prayer-beads",
      descriptionAr:
        "كتابة مجهرية دقيقة على حبات وشواهد السبح النادرة تخلد الأسماء والإهداءات الروحانية.",
    },
    {
      nameAr: "الورق الطبيعي",
      nameEn: "Fine Paper",
      slug: "paper",
      descriptionAr:
        "ورق مقهر يدوي معتق وأحبار نباتية نقية تتبع أصول وقواعد السطور الكلاسيكية.",
    },
  ];

  const createdMaterials: Record<string, string> = {};
  for (const m of materialsData) {
    const mat = await prisma.material.upsert({
      where: { slug: m.slug },
      update: {},
      create: m,
    });
    createdMaterials[m.slug] = mat.id;
  }

  // 5. Techniques
  const techniquesData = [
    {
      nameAr: "حفر ونقش يدوي",
      nameEn: "Hand Engraving",
      descriptionAr: "نقش دقيق بأدوات معدنية صلبة على الزجاج والأسطح الصلبة.",
    },
    {
      nameAr: "حرق وتعتيق فني",
      nameEn: "Pyrographic Burning",
      descriptionAr: "تقنية الكي الحراري المتدرج على أسطح الخشب والمخمل.",
    },
    {
      nameAr: "تخطيط بالريشة والقصب",
      nameEn: "Traditional Reed Pen",
      descriptionAr: "سكب الحبر التقليدي بقصبات مبرية وفق النسب الذهبية للحرف العربي.",
    },
    {
      nameAr: "تذهيب وتشطيب فاخر",
      nameEn: "Gilding & Gold Leaf",
      descriptionAr: "إبراز أطراف الحروف بورق الذهب والألوان المعدنية المعتقة.",
    },
  ];

  const createdTechniques: Record<string, string> = {};
  for (const t of techniquesData) {
    const tech = await prisma.technique.create({ data: t });
    createdTechniques[t.nameAr] = tech.id;
  }

  // 6. Styles
  const stylesData = [
    {
      nameAr: "الخط الديواني الجلي",
      nameEn: "Jali Diwani",
      descriptionAr: "انسيابية دائرية غنية بالتشابكات الجمالية والنقاط التزيينية.",
    },
    {
      nameAr: "خط الثلث",
      nameEn: "Thuluth",
      descriptionAr: "سيد الخطوط العربية بقوامه الرصين وهيبته البصرية العالية.",
    },
    {
      nameAr: "خط الرقعة المعاصر",
      nameEn: "Contemporary Ruq'ah",
      descriptionAr: "خط مباشر سريع وقوي يتميز باقتضابه وقوة سطوره.",
    },
    {
      nameAr: "حروفية تشكيلية حرة",
      nameEn: "Freeform Calligraphy",
      descriptionAr: "تكوينات بصرية حديثة تنطلق من روح الحرف ولا تتقيد بالسطر الكلاسيكي.",
    },
  ];

  const createdStyles: Record<string, string> = {};
  for (const s of stylesData) {
    const st = await prisma.style.create({ data: s });
    createdStyles[s.nameAr] = st.id;
  }

  // 7. Categories
  const categoriesData = [
    { nameAr: "مقتنيات مخصصة", nameEn: "Bespoke Objects", slug: "bespoke" },
    { nameAr: "لوحات فنية جدارية", nameEn: "Wall Art", slug: "wall-art" },
    { nameAr: "إهداءات فاخرة", nameEn: "Luxury Gifts", slug: "luxury-gifts" },
    { nameAr: "تجارب حروفية", nameEn: "Lettering Experiments", slug: "experiments" },
  ];

  const createdCategories: Record<string, string> = {};
  for (const c of categoriesData) {
    const cat = await prisma.category.upsert({
      where: { slug: c.slug },
      update: {},
      create: c,
    });
    createdCategories[c.slug] = cat.id;
  }

  // 8. Sample Curated Works (aligned strictly with real verified medium capabilities)
  const works = [
    {
      titleAr: "أثر على زجاج بلوري",
      titleEn: "Imprint on Crystal Glass",
      slug: "glass-imprint-crystalline",
      excerptAr: "حفر يدوي بارز لعبارة خطية متداخلة على زجاج عالي النقاء.",
      descriptionAr:
        "عمل فني يعكس الضوء بدقة فائقة من خلال تفريغ الحروف يدوياً على لوح زجاجي مصقول، يبرز فيه تباين حواف القطع مع الفراغ المحيط.",
      coverImage: "/images/glass-craft.jpg",
      featured: true,
      published: true,
      year: 2025,
      dimensions: "40 × 60 سم",
      categoryId: createdCategories["bespoke"],
      materialId: createdMaterials["glass"],
      techniqueId: createdTechniques["حفر ونقش يدوي"],
      styleId: createdStyles["الخط الديواني الجلي"],
    },
    {
      titleAr: "تكوين ديواني على خشب الماهوجني",
      titleEn: "Diwani Composition on Mahogany",
      slug: "diwani-on-mahogany-wood",
      excerptAr: "حرق وتعتيق فني على خشب طبيعي صلب مع لمسات ذهبية خافتة.",
      descriptionAr:
        "استلهام من تدرجات ألياف الخشب الطبيعية لنسج حروف تتغلغل في عمق المادة، معالجة بطبقة شمعية تحمي الأثر الحبري.",
      coverImage: "/images/wood-craft.jpg",
      featured: true,
      published: true,
      year: 2025,
      dimensions: "50 × 70 سم",
      categoryId: createdCategories["wall-art"],
      materialId: createdMaterials["wood"],
      techniqueId: createdTechniques["حرق وتعتيق فني"],
      styleId: createdStyles["خط الثلث"],
    },
    {
      titleAr: "نقش مجهري على سبحة العاج والمستكة",
      titleEn: "Micro-Lettering on Prayer Beads",
      slug: "micro-calligraphy-prayer-beads",
      excerptAr: "كتابة يدوية دقيقة لأسماء ونصوص مأثورة على شاهد وحبات سبحة خاصة.",
      descriptionAr:
        "حرفة يدوية صبورة تتطلب ثبات اليد ودقة فائقة لتثبيت النص على الأسطح المنحنية الدقيقة مع طبقة تثبيت زجاجية واقية.",
      coverImage: "/images/prayer-beads-craft.jpg",
      featured: true,
      published: true,
      year: 2026,
      dimensions: "طول الشاهد 5 سم",
      categoryId: createdCategories["luxury-gifts"],
      materialId: createdMaterials["prayer-beads"],
      techniqueId: createdTechniques["حفر ونقش يدوي"],
      styleId: createdStyles["خط الرقعة المعاصر"],
    },
    {
      titleAr: "حروفية حرة على المخمل الداكن",
      titleEn: "Freeform Script on Deep Velvet",
      slug: "freeform-script-on-velvet",
      excerptAr: "تناغم الظلال والملمس الوثير مع حركة الحرف المذهب.",
      descriptionAr:
        "تجربة تجمع بين فخامة نسيج المخمل الأسود وتقنية الرسم الحر بالحبر الذهبي المعتق، تمنح اللوحة عمقاً متغيراً بتغير زاوية الضوء.",
      coverImage: "/images/prayer-beads-craft.jpg",
      featured: true,
      published: true,
      year: 2025,
      dimensions: "80 × 120 سم",
      categoryId: createdCategories["wall-art"],
      materialId: createdMaterials["velvet"],
      techniqueId: createdTechniques["تذهيب وتشطيب فاخر"],
      styleId: createdStyles["حروفية تشكيلية حرة"],
    },
    {
      titleAr: "كتابة يدوية خاصة على الخزف الأسود",
      titleEn: "Custom Calligraphy on Matte Ceramic Cup",
      slug: "custom-calligraphy-ceramic-cup",
      excerptAr: "نقش وكتابة حروفية مقاومة للحرارة على كوب خزفي فاخر.",
      descriptionAr:
        "عمل مخصص يجمع بين الاستخدام اليومي والأناقة الفنية للخط العربي بحبر ثابت ومصقول.",
      coverImage: "/images/glass-craft.jpg",
      featured: false,
      published: true,
      year: 2026,
      dimensions: "ارتفاع 11 سم",
      categoryId: createdCategories["bespoke"],
      materialId: createdMaterials["cups"],
      techniqueId: createdTechniques["حفر ونقش يدوي"],
      styleId: createdStyles["خط الرقعة المعاصر"],
    },
    {
      titleAr: "تكوين الثلث الجلي على ورق مقهر",
      titleEn: "Jali Thuluth on Ahar Paper",
      slug: "jali-thuluth-ahar-paper",
      excerptAr: "عمل كلاسيكي رصين بحبر كربوني طبيعي على ورق يدوي معالج بالنشا والبيض.",
      descriptionAr:
        "العودة إلى جذور الصنعة؛ توازن دقيق بين ميزان القلم ونسب الحروف مع الحفاظ على صفاء السطر وحركة المدات الكلاسيكية.",
      coverImage: "/images/hero-calligraphy.jpg",
      featured: true,
      published: true,
      year: 2024,
      dimensions: "35 × 50 سم",
      categoryId: createdCategories["wall-art"],
      materialId: createdMaterials["paper"],
      techniqueId: createdTechniques["تخطيط بالريشة والقصب"],
      styleId: createdStyles["خط الثلث"],
    },
  ];

  for (const w of works) {
    await prisma.work.upsert({
      where: { slug: w.slug },
      update: {
        coverImage: w.coverImage,
        titleAr: w.titleAr,
        excerptAr: w.excerptAr,
        descriptionAr: w.descriptionAr,
        featured: w.featured,
      },
      create: {
        ...w,
        media: {
          create: [
            {
              url: w.coverImage,
              type: "image",
              altAr: w.titleAr,
              altEn: w.titleEn,
              captionAr: w.excerptAr,
              sortOrder: 0,
            },
          ],
        },
      },
    });
  }

  // 9. Journal Posts (دفتر الحرف)
  const journalPosts = [
    {
      titleAr: "حين ينتقل القلم من مسطح الورق إلى صلب المادة",
      titleEn: "When the Pen Moves Beyond Paper",
      slug: "pen-beyond-paper",
      excerptAr: "تأملات في سلوك الحبر ونصل الحفر عند ملامسة خامات الخشب والزجاج.",
      contentAr: `الورق المقهر كان وما يزال المهد الأول للحرف العربي، لكن المادة تفرض روحاً أخرى حين يواجه القصب سطحاً صلباً كخشب الزيتون أو بلور الزجاج.

في الحفر على الزجاج، لا يملك الفنان رفاهية التردد؛ الضربة الواحدة تنحت الضوء أو تكسره. وهنا بالذات يختبر الخطاط معنى "الأثر"؛ ليس مجرد حبر يمتصه السطح، بل تجويف مادي يبقى ما بقيت القطعة.`,
      coverImage: "/images/journal/post-1.svg",
      category: "خامات وتقنيات",
      tags: "خامات, زجاج, فلسفة الحرف, خشب",
      published: true,
    },
    {
      titleAr: "سر النقش على السبح: صغر المساحة وعظمة التفصيل",
      titleEn: "The Art of Micro-Lettering on Beads",
      slug: "micro-lettering-secrets",
      excerptAr: "كيف يمكن تطويع الحرف العربي في مساحة لا تتجاوز بضعة مليمترات.",
      contentAr: `السبحة ليست مجرد مقتنى، بل قطعة ترافق صاحبها في لحظات صفائه وتأمله. حين يُطلب مني نقش اسم أو نص روحاني على شاهد السبحة، يتحول المجهر إلى عين ثانية، وتصبح حركة اليد موزونة بالأنفاس.

في هذا الفن الدقيق، يعتمد النجاح على اختيار الأسلوب الخطي المناسب؛ فخط الرقعة بنقاء خطوطه واختصاره الذكي يتفوق أحياناً على تعقيدات الثلث والديواني في المساحات بالغة الصغر.`,
      coverImage: "/images/journal/post-2.svg",
      category: "من الاستوديو",
      tags: "سبح, نقش يدوي, كواليس",
      published: true,
    },
  ];

  for (const post of journalPosts) {
    await prisma.journalPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
  }

  // 10. Services
  const services = [
    {
      titleAr: "الكتابة والحفر على الزجاج",
      titleEn: "Glass Engraving & Etching",
      descriptionAr: "تنفيذ الدروع الفنية، الألواح الجدارية البلورية، والتحف الزجاجية المنقوشة يدوياً.",
      coverImage: "/images/services/service-glass.svg",
      sortOrder: 1,
    },
    {
      titleAr: "الحرق والتخطيط على الخشب الطبيعي",
      titleEn: "Wood Burning & Calligraphy",
      descriptionAr: "لوحات حروفية ومعلقات خشبية معتقة بأساليب الحرق اليدوي والتذهيب المعاصر.",
      coverImage: "/images/services/service-wood.svg",
      sortOrder: 2,
    },
    {
      titleAr: "نقش الإهداءات على السبح والأكواب",
      titleEn: "Personalized Engraving on Beads & Cups",
      descriptionAr: "تخليد الأسماء والعبارات الوجدانية على السبح الثمينة والأكواب الخزفية الفاخرة.",
      coverImage: "/images/services/service-beads.svg",
      sortOrder: 3,
    },
    {
      titleAr: "أعمال خاصة على المخمل والسجاد",
      titleEn: "Bespoke Calligraphy on Velvet & Carpets",
      descriptionAr: "تنفيذ جداريات وقطع فنية استثنائية على أقمشة المخمل الملكي والسجاد الفاخر.",
      coverImage: "/images/services/service-velvet.svg",
      sortOrder: 4,
    },
  ];

  for (const s of services) {
    await prisma.service.create({ data: s });
  }

  // 11. Curated Social Posts (Snapchat reference)
  const socialPosts = [
    {
      provider: "snapchat",
      title: "مراحل الحفر اليدوي على قطعة زجاج بلورية في استوديو الرياض",
      url: "https://www.snapchat.com/@sohilnasr7",
      thumbnail: "/images/social/snap-1.svg",
      description: "توثيق حي للخطوات الأولى لنحت حروف ديوانية جليه.",
      featured: true,
      sortOrder: 1,
    },
    {
      provider: "snapchat",
      title: "نقش مجهري على شاهد سبحة خاصة",
      url: "https://www.snapchat.com/@sohilnasr7",
      thumbnail: "/images/social/snap-2.svg",
      description: "استعراض دقة السطور وسكون حركة اليد تحت العدسة المكبرة.",
      featured: true,
      sortOrder: 2,
    },
  ];

  for (const sp of socialPosts) {
    await prisma.socialPost.create({ data: sp });
  }

  console.log("Database seeded successfully with authentic Suhail Nasr data.");
}

main()
  .catch((e) => {
    console.error("Error during seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
