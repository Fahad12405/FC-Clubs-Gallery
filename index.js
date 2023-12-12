const imageArray = [
    {
      url: "https://cf.ijersey.ru/upload/ttmall/img/20220705/1244cfe43961c0920c8e04c6963dafed.png=z-0,0_f-webp",
      
      category: "barcelona"
    },
    
    {
      url: "https://theshoppies.pk/wp-content/uploads/2023/06/Real-Madrid-2023-24-Home-jERSEY.jpg",
      category: "real madrid"
    },
    {
      url: "https://images.footballfanatics.com/bayern-munich/fc-bayern-adidas-home-shirt-2023-24-kids-harry-kane-9_ss5_p-200502297+pv-2+u-ppjakvowl3snxkizlnig+v-xvxu6j7nxpyszbzwborf.jpg?_hv=2&w=600",
      category: "bayern munich"
    },
    {
      url: "https://theshoppies.pk/wp-content/uploads/2023/06/MAN-CITY.jpeg",
      category: "manchester city"
    },
    {
      url: "https://diamu.com.bd/wp-content/uploads/2022/07/Manchester-United-Home-Authentic-Jersey-2022-23.jpg",
      category: "manchester united"
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/I/61hO3UgvFcL._AC_UL600_SR600,600_.jpg",
      category: "ac milan"
    },
    {
      url: "https://www.tfcfootball.com.my/wp-content/uploads/2022/05/765883_01.png",
      category: "Borussia Dortmund"
    },
    {
      url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6r3aCYvh2jj4KTrIOWqIryU0v6qnQyZRLV4zLplha0An2_OFuxy0Lyr9U_4W8GGdvAD63dE9KDQEWTAquZPHIfdxj-PiTiWWT11OaHevsPU1RpX5TyM1YRZ4yKdEOkvFVDN28-WZ4cJbTAnCHEoNY-sUlDKDik_1fsH6GW_dW7YjKWwS5jgiCzrz7Nds/s1600/inter%2023%2024%20kit%20home%20%2814%29.jpg",
      category: "Inter Milan"
    },
    {
      url: "https://theshoppies.pk/wp-content/uploads/2023/01/Paris-Saint-Germain-PSG-Jersey-2023-24.jpg",
      category: "PSG"
    },
    {
      url: "https://theshoppies.pk/wp-content/uploads/2020/07/Liverpool-LFC-Home-Jersey-2023-24.jpg",
      category: "Liverpool"
    },
    {
      url: "https://images.footballfanatics.com/chelsea/chelsea-nike-home-vapor-match-shirt-2023-24_ss5_p-13387597+pv-2+u-yk6besygd7gfjsls16pz+v-0rp4jd60752nyv57iqoz.jpg?_hv=2&w=900",
      category: "Chelsea"
    },
    {
      url: "https://www.sportsdirect.com/images/imgzoom/37/37745201_xxl.jpg",
      category: "Tottenham"
    },
    {
      url: "https://www.soccerpro.com/wp-content/uploads/ik7166_adidas_as_roma_home_stadium_jsy_2023_24_01.jpg",
      category: "Roma"
    },
    {
      url: "https://down-th.img.susercontent.com/file/bfaf0beee10c6dc48b9e56e6bb0bf01b",
      category: "Arsenal"
    },
    {
      url: "https://theshoppies.pk/wp-content/uploads/2023/06/Inter-Miami-Jersey.jpeg",
      category: "Inter Miami"
    },
    {
      url: "https://theshoppies.pk/wp-content/uploads/2023/01/Al-Nassar-Ronaldo-Shirt-2023.jpg",
      category: "Al Nassr"
    },
    {
      url: "https://theshoppies.pk/wp-content/uploads/2023/06/Juventus-Home-Jersey-2023-24-Shirt.jpg",
      category: "Juventus"
    },
    {
      url: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/776967/01/fnd/ARE/fmt/png/",
      category: "AL Hilal"
    },
    {
      url: "https://play-lh.googleusercontent.com/ue88El81ZXdm4YPNcsn3No7VYnh9ZEWwJYNbCTxM6_K1cLfpezsLS6fOxwQR1Z9kEms",
      
      category: "barcelona"
    },
    {
      url: "https://live.staticflickr.com/3665/14315681425_901f45da88.jpg",
      category: "real madrid"
    },
    {
      url: "https://i.pinimg.com/originals/56/e1/83/56e1838a0ccf0f5ceefdc1a6dca9a801.jpg",
      category: "bayern munich"
    },
    {
      url: "https://i.pinimg.com/736x/4b/e8/5d/4be85d590158cf62c797ee56d19335ca.jpg",
      category: "manchester city"
    },
    {
      url: "https://thumbs.dreamstime.com/z/manchester-united-f-c-england-feb-vector-illustration-logo-red-background-87280642.jpg",
      category: "manchester united"
    },
    {
      url: "https://w0.peakpx.com/wallpaper/269/467/HD-wallpaper-ac-milan-icio-logo.jpg",
      category: "ac milan"
    },
    {
      url: "https://prod-printler-front-as.azurewebsites.net/media/photo/148166.jpg?mode=crop&width=727&height=1024&rnd=0.0.1",
      category: "Borussia Dortmund"
    },
    {
      url: "https://creativereview.imgix.net/content/uploads/2021/03/IM-1.jpg?auto=compress,format&q=60&w=1200&h=1600",
      category: "Inter Milan"
    },
    {
      url: "https://w0.peakpx.com/wallpaper/192/969/HD-wallpaper-psg-logo-ldc-paris-saint-germain.jpg",
      category: "PSG"
    },
    {
      url: "https://i.pinimg.com/736x/28/9b/8e/289b8e793ffa1eb599c2fd173cb71de6.jpg",
      category: "Liverpool"
    },
    {
      url: "https://i.pinimg.com/736x/3d/f4/50/3df4502d8fac09ec88f008484877ec21.jpg",
      category: "Chelsea"
    },
    {
      url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/40f24db0-fbbc-484e-9e6c-7296472f9efa/d6rbq8u-384dd317-20b0-4c03-be52-bdba163481c3.png/v1/fill/w_670,h_1192,q_70,strp/tottenham_hotspur_logo_wallpaper_for_phones____by_donioli_d6rbq8u-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzQwZjI0ZGIwLWZiYmMtNDg0ZS05ZTZjLTcyOTY0NzJmOWVmYVwvZDZyYnE4dS0zODRkZDMxNy0yMGIwLTRjMDMtYmU1Mi1iZGJhMTYzNDgxYzMucG5nIiwid2lkdGgiOiI8PTEwODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ZVk7dxp6NuoqW_mrVaEM9XcR1lJAPLl-QOUeCcDe3x0",
      category: "Tottenham"
    },
    {
      url: "https://w0.peakpx.com/wallpaper/186/644/HD-wallpaper-roma-calcio-italia-logo.jpg",
      category: "Roma"
    },
    {
      url: "https://wallpapercrafter.com/desktop/455316-Sports-Arsenal-F.C.-Phone-Wallpaper.jpg",
      category: "Arsenal"
    },
    {
      url: "https://w0.peakpx.com/wallpaper/754/980/HD-wallpaper-inter-miami-fc-golden-logo-mls-purple-metal-background-american-soccer-club-inter-miami-united-soccer-league-inter-miami-logo-soccer-america.jpg",
      category: "Inter Miami"
    },
    {
      url: "https://is.zobj.net/image-server/v1/images?r=sEaqV_xEvuYPjoF7tvJ_dT1kzHMTiR0i-Ie-l7f7Ri2DVtL8_qoLU4Gq0GoAjgivPJntxNFtoK0phY0KAyawLuNHJBNESdtPZxylgSShqiNg-pLCcjuI0qqfaqagqV8XmKx53UKmqqteU5n0xwBY_AmbN8adi4qD9umEfnyeSgRLZv7M3uc0f23BCEvf0_DbXmtpKPSP-vvrSqyHLNfAlAoPGky-f0jHlyOvk7WPepMpaedFJW__7PI7GBI",
      category: "Al Nassr"
    },
    {
      url: "https://static.dezeen.com/uploads/2017/01/juventus-logo-design-graphics-football_products_dezeen_2364_col_7.jpg",
      category: "Juventus"
    },
    {
      url: "https://w0.peakpx.com/wallpaper/644/709/HD-wallpaper-al-hilal-fc-119-al-hilal.jpg",
      category: "AL Hilal"
    },
    {
      url: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/11/18/16687831246895.jpg",
      
      category: "barcelona"
    },
    {
      url: "https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-08/sporting-news-2022-photo-with-watermark-1d0b8060-4915-4240-b315-28555fa3e661.png?itok=n_2zV-bI",
      category: "real madrid"
    },
    {
      url: "https://img.fcbayern.com/image/upload/t_cms-16x9/f_auto/w_1600,c_fill/q_auto/v1656617617/cms/public/images/fcbayern-com/homepage/Teamfoto/Teamfoto.jpg",
      category: "bayern munich"
    },
    {
      url: "https://i2-prod.manchestereveningnews.co.uk/incoming/article21767915.ece/ALTERNATES/s615/0_FA7IVbPXMAEt5V_jfif.jpg",
      category: "manchester city"
    },
    {
      url: "https://assets-webp.khelnow.com/news/uploads/2023/01/0x0.jpg.webp",
      category: "manchester united"
    },
    {
      url: "https://www.acmilaninfo.com/wp-content/uploads/2023/02/milan-players.jpg",
      category: "ac milan"
    },
    {
      url: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fbvbbuzz.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1423981902.jpeg",
      category: "Borussia Dortmund"
    },
    {
      url: "https://cdn.zeebiz.com/sites/default/files/2023/05/17/242728-fwrb-hyx0awy33k.jpg",
      category: "Inter Milan"
    },
    {
      url: "https://www.japantimes.co.jp/uploads/imported_images/uploads/2023/02/np_file_211769.jpeg",
      category: "PSG"
    },
    {
      url: "https://lfcglobe.co.uk/wp-content/uploads/2023/08/liverpool-fc-v-bayern-muenchen-pre-season-friendly-scaled.jpg",
      category: "Liverpool"
    },
    {
      url: "https://www.101greatgoals.com/resizer/sdzBYkdiNl0kETdIV_4kdA_RaDM=/1024x576/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/xlmedia/FR7GZHRCLRHNTCYIZIYS2S363M.jpg",
      category: "Chelsea"
    },
    {
      url: "https://cdn.vox-cdn.com/thumbor/7cAEFSCG94tnJE_0yGCst-o5HbE=/0x0:4229x2819/1200x800/filters:focal(1746x789:2422x1465)/cdn.vox-cdn.com/uploads/chorus_image/image/72600578/1585161691.0.jpg",
      category: "Tottenham"
    },
    {
      url: "https://s.hs-data.com/bilder/teamfotos/640x360/520.jpg",
      category: "Roma"
    },
    {
      url: "https://icdn.caughtoffside.com/wp-content/uploads/2023/05/arsenal-bodo-line-up-image.jpg",
      category: "Arsenal"
    },
    {
      url: "https://prosoccerwire.usatoday.com/wp-content/uploads/sites/107/2023/07/AP-Leagues-Cup-Miami-Dallas-Soccer-e1691863498367.jpg?w=1000&h=600&crop=1",
      category: "Inter Miami"
    },
    {
      url: "https://static.wixstatic.com/media/ab5830_6fc94ed320f34a1bbcd7b82bbf989910~mv2.png/v1/fill/w_640,h_470,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ab5830_6fc94ed320f34a1bbcd7b82bbf989910~mv2.png",
      category: "Al Nassr"
    },
    {
      url: "https://cdn.vox-cdn.com/thumbor/e3cshtuHq4UOshQzIFEqbQsyYF8=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24713292/1247247312.jpg",
      category: "Juventus"
    },
    {
      url: "https://ss-i.thgim.com/public/incoming/e0p22e/article66524147.ece/alternates/LANDSCAPE_1200/Morocco_Soccer_Club_World_Cup_21275.jpg",
      category: "AL Hilal"
    },
    {
      url: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt112794b6c5fda82c/64d524d86bbdf7e2d336c2b0/Club_Preview_Barcelona.jpg",
      
      category: "barcelona"
    },
    {
      url: " https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta170b050bb68b8fa/650c56b0e1d01e4ceffcd455/Power_Rank_Real_Madrid.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      category: "real madrid"
    },
    {
      url: "  https://img.fcbayern.com/image/upload/t_cms-4x3-seo/v1675948482/cms/public/images/fcbayern-com/homepage/Saison-22-23/Sonstiges/230209-maharashtra-youth-cup-2023-16-9.png",
      category: "bayern munich"
    },
    {
      url: "https://www.soccerpro.com/thecentercircle/wp-content/uploads/2022/07/22AW_Ecom_Global_TS_Football_Manchester-City_Away_SplitHeroLeft_Desktop_960x500_Player.jpg",
      category: "manchester city"
    },
    {
      url: "  https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta156a2e8a83eaf27/64b64e363e20d97b6cdc39ca/Man_United_Captain.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      category: "manchester united"
    },
    {
      url: " https://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,h_436,w_700/h1ehpvlwfttdcu0ib1wz?mrf-size=m",
      category: "ac milan"
    },
    {
      url: "  https://cdn.vox-cdn.com/thumbor/TDTLdmhEB7vXDf_46yBrfEvNcCQ=/0x0:5322x3648/1400x933/filters:focal(3858x902:4708x1752):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69284369/1317857078.0.jpg",
      category: "Borussia Dortmund"
    },
    {
      url: "   https://intermilan.bynder.com/m/6d4d6200458c8992/webimage-Lautaro_4-5.png",
      category: "Inter Milan"
    },
    {
      url: " https://images2.minutemediacdn.com/image/upload/c_crop,w_6000,h_3375,x_0,y_338/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_en_international_web/01h237ng5vfnttdbpkv3.jpg",
      category: "PSG"
    },
    {
      url: " https://www.footballticketnet.com/theme/images/teams/Buy-Liverpool-Football-Tickets-FootballTicketNet.png?v=1669032973",
      category: "Liverpool"
    },
    {
      url: "  https://img.chelseafc.com/image/upload/f_auto,q_auto:best/galleries/champions-league-final-2021/cl_final_trophy_lift.jpg",
      category: "Chelsea"
    },
    {
      url: "   https://i2-prod.football.london/incoming/article26869586.ece/ALTERNATES/s1200c/0_GettyImages-1487592683.jpg",
      category: "Tottenham"
    },
    {
      url: "   https://idsb.tmgrup.com.tr/ly/uploads/images/2022/05/26/207979.jpg",
      category: "Roma"
    },
    {
      url: "  https://www.aljazeera.com/wp-content/uploads/2023/08/2023-08-06T174428Z_1832925064_UP1EJ861DA2QM_RTRMADP_3_SOCCER-ENGLAND-MCI-ARS-REPORT-1691344144.jpg?resize=1920%2C1440",
      category: "Arsenal"
    },
    {
      url: "  https://media.cnn.com/api/v1/images/stellar/prod/230820001606-messi-inter-miami-first-trophy-082023.jpg?c=original",
      category: "Inter Miami"
    },
    {
      url: "https://news.cgtn.com/news/2023-08-13/Ronaldo-wins-first-title-at-Al-Nassr-in-Arab-Club-Champions-Cup-title-1meCUJtEO9q/img/14256e42471d4325b600975ef29dda2a/14256e42471d4325b600975ef29dda2a.jpeg",
      category: "Al Nassr"
    },
    {
      url: "  https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/05/13/juve.jpg?quality=75&width=982&height=726&auto=webp",
      category: "Juventus"
    },
    {
      url: "https://saudigazette.com.sa/uploads/images/2022/12/23/2061495.jpg",
      category: "AL Hilal"
    },
    {
      url: "https://staticg.sportskeeda.com/editor/2018/04/12d8a-1523554584-800.jpg",
      
      category: "barcelona"
    },
    {
      url: "    https://i.ytimg.com/vi/cvITOTQYhmk/maxresdefault.jpg",
      category: "real madrid"
    },
    {
      url: "    https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/05/13/3703683-75363588-2560-1440.jpg",
      category: "bayern munich"
    },
    {
      url: "   https://pbs.twimg.com/media/Fngrt7GXoAAp42J?format=jpg&name=4096x4096",
      category: "manchester city"
    },
    {
      url: "  https://library.sportingnews.com/styles/twitter_card_120x120/s3/2023-02/GOAL_-_Blank_WEB_-_Facebook_-_2023-02-19T143641.453.jpeg?itok=FKEpgMTX",
      category: "manchester united"
    },
    {
      url: "  https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F06%2Fac-milan-puma-new-home-jersey-official-imagery-1.jpg?cbr=1&q=90",
      category: "ac milan"
    },
    {
      url: "    https://pbs.twimg.com/media/Fp01WVkXsAgI48F.jpg:large",
      category: "Borussia Dortmund"
    },
    {
      url: "  https://football-italia.net/wp-content/uploads/2022/10/h_58016399.jpg",
      category: "Inter Milan"
    },
    {
      url: "    https://www.psg.fr/media/247137/home-23-24-1920x1080.jpg?anchor=center&mode=crop&width=800&height=450&quality=60",
      category: "PSG"
    },
    {
      url: "    https://www.thisisanfield.com/wp-content/uploads/2023-09-03-186-Liverpool_Aston_Villa-1.jpg",
      category: "Liverpool"
    },
    {
      url: "  https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt9d9b57ea2f978f03/64d4ee47346d5f0802d782f8/Club_Preview_Chelsea.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      category: "Chelsea"
    },
    {
      url: "    https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/01/07/3520246-71752088-2560-1440.jpg",
      category: "Tottenham"
    },
    {
      url: "   https://media.nationthailand.com/uploads/images/contents/w1024/2023/07/zx8AYs6T09o4si9xPOzl.webp",
      category: "Roma"
    },
    {
      url: " https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt306ee807fe94e77c/64d37b81114b64a4bf1b56a3/Club_Preview_Arsenal.jpg?auto=webp&format=pjpg&width=3840&quality=60",
      category: "Arsenal"
    },
    {
      url: "  https://static.srpcdigital.com/styles/1037xauto/public/2023-07/269871_0.jpeg",
      category: "Inter Miami"
    },
    {
      url: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4b22345d697982c1/64e995dcb2ec2a4e9f11b74a/Cristiano_Ronaldo_Al-Nassr_2023-24_(2).jpg?auto=webp&format=pjpg&width=3840&quality=60",
      category: "Al Nassr"
    },
    {
      url: "    https://figurineforever.com/wp-content/uploads/2022/12/J-cover-1-853x1024.jpg",
      category: "Juventus"
    },
    {
      url: "  https://pbs.twimg.com/media/F05yfM7XsAUIlXh?format=jpg&name=large",
      category: "AL Hilal"
    },
  
    {
      url: "https://prosoccerwire.usatoday.com/wp-content/uploads/sites/107/2023/05/AFP-AFP_33E499J-e1683917261965.jpg?w=1000&h=600&crop=1",
      
      category: "barcelona"
    },
    {
      url: "  https://cdn.vox-cdn.com/thumbor/0E1XgkHKkxli58jOrK0a2r00WMs=/0x0:5773x3849/1200x800/filters:focal(2368x747:3290x1669)/cdn.vox-cdn.com/uploads/chorus_image/image/72669750/1692574647.5.jpg",
      category: "real madrid"
    },
    {
      url: "https://static.dw.com/image/65753931_803.jpeg",
      category: "bayern munich"
    },
    {
      url: " https://www.nzherald.co.nz/resizer/ZP66ZvoEcZ6bpWyfQbgLSTAamds=/576x613/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/ENACNC7AHBAIFB4K5Z3FTOTUTA.jpg",
      category: "manchester city"
    },
    {
      url: "    https://cdn1.unitedinfocus.com/uploads/14/2023/02/GettyImages-1469827642-scaled.jpg",
      category: "manchester united"
    },
    {
      url: " https://i.guim.co.uk/img/media/c025299c95c2bf9f32ef6b6f8a8b718460b320e7/0_272_5444_3266/master/5444.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=2e20d97afcb8b6e1abb695ff72214289",
      category: "ac milan"
    },
    {
      url: " https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt220764e6e913b432/647076b4b105d28210786a18/Borussia_Dortmund_2023-24_kit_collection.png?auto=webp&format=pjpg&width=3840&quality=60",
      category: "Borussia Dortmund"
    },
    {
      url: " https://uk1.sportal365images.com/process/smp-image-api/livescore.com/13012022/1642084977480.jpg",
      category: "Inter Milan"
    },
    {
      url: " https://uk1.sportal365images.com/process/smp-image-api/livescore.com/26082023/628737c5-09bd-4986-854d-42de6943f6a9.jpg?operations=fit(707:)&w=707&quality=100",
      category: "PSG"
    },
    {
      url: "    https://www.thisisanfield.com/wp-content/uploads/20190601-127-UEFA_Champions_League_Final.jpg",
      category: "Liverpool"
    },
    {
      url: " https://i2-prod.football.london/incoming/article18625513.ece/ALTERNATES/s615/0_Chelsea-FA-Cup-Manchester-United.jpg",
      category: "Chelsea"
    },
    {
      url: "   https://pbs.twimg.com/media/F3Vv7hbXMAEvnDN?format=jpg&name=4096x4096",
      category: "Tottenham"
    },
    {
      url: "    https://images2.thanhnien.vn/Uploaded/thaodn/2023_01_05/anh-man-hinh-2023-01-05-luc-054659-9582.png",
      category: "Roma"
    },
    {
      url: "   https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/betting/wp-content/uploads/2023/06/gettyimages-1432010444-612x612-1.jpeg",
      category: "Arsenal"
    },
    {
      url: "    https://cdna.artstation.com/p/assets/images/images/065/331/162/large/drawinghookstudio-messi-inter-miami.jpg?1690117611",
      category: "Inter Miami"
    },
    {
      url: "https://al-nassrclub.com/wp-content/uploads/2023/06/portugal-1.jpg",
      category: "Al Nassr"
    },
    {
      url: " https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_auto/dev/axgxz2pt3iq5jnv4rs7n.jpg",
      category: "Juventus"
    },
    {
      url: "   https://thethaovanhoa.mediacdn.vn/372676912336973824/2023/8/25/al-hilal-16929247732801748358187.jpg",
      category: "AL Hilal"
    },
  
  
  
  
  ];
  
  const imageSize = "200px";
  
  const allImages = [...imageArray];
  
 
  for (const imageObj of allImages) {
    console.log("Image URL:", imageObj.url);
  }
  
  const gallery = document.querySelector('.gallery');
  
  function createImageElement(imageUrl) {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Image';
      return img;
  }
  
  function populateGallery(images) {
      gallery.innerHTML = '';
      for (const imageObj of images) {
          const img = createImageElement(imageObj.url);
          gallery.appendChild(img);
      }
  }
  
  for (const imageObj of imageArray) {
      const img = createImageElement(imageObj.url);
      gallery.appendChild(img);
  }
  
  const popupContainer = document.querySelector('.popup-container');
  const popupImage = document.querySelector('.popup-image');
  const closePopup = document.querySelector('.close-popup');
  
  function openPopup(imageUrl) {
      popupImage.src = imageUrl;
      popupContainer.style.display = 'block';
  }
  
  function closePopupWindow() {
      popupContainer.style.display = 'none';
  }
  
  gallery.addEventListener('click', function (event) {
      if (event.target.tagName === 'IMG') {
          openPopup(event.target.src);
      }
  });
  
  closePopup.addEventListener('click', closePopupWindow);
  
  popupContainer.addEventListener('click', function (event) {
      if (event.target === popupContainer) {
          closePopupWindow();
      }
  });
  
  document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
          closePopupWindow();
      }
  });
  
  const searchInput = document.getElementById('search');
  const categoryFilter = document.getElementById('category-filter');
  
  function updateGallery() {
      const selectedCategory = categoryFilter.value;
      const query = searchInput.value.trim().toLowerCase();
  
      let filteredImages = [...allImages];
  
      if (selectedCategory !== 'all') {
          filteredImages = filteredImages.filter(imageObj =>
              imageObj.category.toLowerCase() === selectedCategory
          );
      }
  
      if (query !== '') {
          filteredImages = filteredImages.filter(imageObj =>
              imageObj.category.toLowerCase().includes(query)
          );
      }
  
      populateGallery(filteredImages);
  }
  
  
  searchInput.addEventListener('input', updateGallery);
  
 
  categoryFilter.addEventListener('change', updateGallery);
  
  
  updateGallery();