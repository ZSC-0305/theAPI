const express = require('express');
const app = express();
// const PORT = process.env.PORT || 3000;
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use((req,res,next)=>{
  res.success = (data)=>{
    res.json({
      code:200,msg:'success',data
    })
  }
  next()
})

app.get('/img', (req, res) => {
  const images = [
    "https://www.islide.cc/_next/static/media/homeRecommend_1.54f15d40.png",
    "https://www.islide.cc/_next/static/media/homeRecommend_2.ba674994.png",
    "https://www.islide.cc/_next/static/media/homeRecommend_3.79347e79.png",
    "https://www.islide.cc/_next/static/media/homeRecommend_4.fc2d4dad.png",
    "https://www.islide.cc/_next/static/media/homeRecommend_6.59020831.png",
    "https://www.islide.cc/_next/static/media/homeRecommend_5.4b5e4d4a.png",
    "https://www.islide.cc/_next/static/media/homeRecommend_7.0aaaa873.png",
    "https://www.islide.cc/_next/static/media/homeRecommend_8.41386cfa.png"
  ];
  res.success(images)
});

app.get('/content', (req, res) => {
  const partners = [
    {
      title: "夸克文档",
      content: "与iSlide进行深度合作，从资源整合到 AI 生成从内容到功能，iSlide 为夸克文档办公频道提供了大量、优质的 PPT 资源，确保夸克用户在素材选择上的丰富性和多样性，同时 iSlide 在夸克文档自身的 AI 生成 PPT 服务中，给予了相当多的技术协助和服务支持。",
      imageUrl: "https://www.islide.cc/_next/static/media/Logo_Quark.0713692b.png"
    },
    {
      title: "微软OfficePLUS",
      content: "与微软中国合作，共同探索和研究 PPT 智能化设计的功能和产品。目前 iSlide 代理运营 OfficePLUS 产品，统一输出制定【 PPT 标准化设计规范】，为微软 OfficePLUS 产品提供标准组件化的 PPT 各类模板，同时双方还联手定制双方互相认可的设计师频道，为国内 PPT 设计师提供更大机会。",
      imageUrl: "https://www.islide.cc/_next/static/media/Logo_OfficePLUS.cb0c5290.png"
    },
    {
      title: "航天云网",
      content: "首先实现双方站内 SSO 登录互通，再通过 iSlide 的 OpenAPI 接口提供，采取前端请求后端渲染并数据回传的方式进行 PPT 下载，为网站用户实现一键生成 PPT 的快捷高效办公需求，不仅能实现从 0 文本到全套 PPT 的生成，还能进行大纲内容的二次修正，以及海量的模板风格一键切换",
      imageUrl: "https://www.islide.cc/_next/static/media/Logo_Casicloud.cd1e57b2.png"
    },
    {
      title: "金杜律所",
      content: "将 iSlide 公有网络的全部功能迁移至企业内部的服务器环境，实现了企业数据的安全保障，成为企业专属的“内部定制”版产品。不仅将企业内部丰富的 PPT 资源完美整合，还确保了员工在制作 PPT 时能够便捷地调用这些资源，提高了工作效率，企业也无需再担心数据外泄的风险。",
      imageUrl: "https://www.islide.cc/_next/static/media/Logo_King&Wood.7cc1f55f.png"
    },
    {
      title: "斯凯奇",
      content: "通过使用 iSlide PPT 办公高阶培训 + 企业 SaaS 服务的企业培训标准套餐，一站式解决了员工的 PPT 需求，在课程的加持下，配合 iSlide 企业会员的使用，让 PPT 的产出节约了 90% 的时间，同时为其量身打造的企业主题模板，直接应用到 AI 生成中，每一套都像定制级的商业模板。",
      imageUrl: "https://www.islide.cc/_next/static/media/Logo_Skechers.8a08383d.png"
    },
    {
      title: "智慧树网",
      content: "采用了高度产品定制的合作方式，通过封装代码形式，将 iSlide 的资源库容器内嵌到智慧树网自身产品中，从 UI 到命名皆为智慧树自定义，与智慧网自身产品进行无缝衔接，将专业教学知识、核心素材融合，建立专属的素材库，让资源管理变得井井有条，打造出专属于教师群体的个性化课件",
      imageUrl: "https://www.islide.cc/_next/static/media/Logo_Zhihuishu.c5a97079.png"
    },
    {
      title: "安吉尔",
      content: "采用 docker 容器部署的方式将 iSlide 资源库与离线功能部署到安吉尔本地服务器，并定向打通安吉尔 OA 登录账号体系，管理员可实现汇报演示素材便捷管理，员工能实现素材精确筛选，同时所有企业组下用户能实时登录查看最新的对外汇报主题模板，还可以共享自己的 PPT 模板到企业公共空间",
      imageUrl: "https://www.islide.cc/_next/static/media/Logo_Angel.76561345.png"
    }
  ];
  res.success(partners);
});

// // 启动服务器
// app.listen(PORT, () => {
//   console.log(`服务已启动，访问地址：http://localhost:${PORT}`);
// });

module.exports = app;