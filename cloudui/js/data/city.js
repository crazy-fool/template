var cpArea={'1':['安康','澳门','安庆','鞍山','安顺','包头','本溪','巴中','滨州','北京','宝鸡','毕节','北海','保定','白城','蚌埠','郴州','池州','滁州','长治','常州','沧州','朝阳','朝阳','长沙','长春','成都','常德','承德','赤峰','巢湖'],'0':['北京','常州','长沙','长春','成都','大连','福州','广州','贵阳','杭州','海口','哈尔滨','合肥','呼和浩特','济南','昆明','兰州','柳州','南宁','南京','南昌','宁波','泉州','青岛','沈阳','三亚','苏州','深圳','上海','石家庄','太原','天津','无锡','武汉','西宁','西安','香港','厦门','银川','中山','郑州','重庆','珠海'],'2':['达州','德州','东营','大同','大庆','大连','丹东','东莞','鄂州','二连浩特','鄂尔多斯','抚州','福州','阜阳','阜新','佛山','抚顺'],'3':['赣州','广州','广元','贵阳','桂林','广安','葫芦岛','淮南','黄山','黄石','衡水','衡阳','汉中','杭州','湖州','惠州','荷泽','呼伦贝尔','海口','淮安','鹤壁','淮北','邯郸','哈尔滨','合肥','黄冈','鹤岗','黑河','怀化','呼和浩特'],'4':['济宁','嘉兴','鸡西','嘉峪关','锦州','焦作','荆州','济南','佳木斯','荆门','吉安','晋城','景德','金华','九江','吉林','江门','喀什','昆明','克拉玛依','开封','库尔勒','龙岩','临沂','辽源','辽阳','连云港','兰州','柳州','洛阳','莱芜','拉萨','六安','聊城','娄底','廊坊','临汾','六盘水','丽水'],'5':['梅州','绵阳','眉山','牡丹江','马鞍山','南阳','南通','南平','南宁','内江','南京','宁德','南充','南昌','宁波'],'6':['攀枝花','萍乡','莆田','平凉','盘锦','平顶山','钦州','泉州','清远','齐齐哈尔','曲靖','潜江','秦皇岛','青岛','日照'],'7':['邵阳','十堰','沈阳','绍兴','三亚','松原','随州','宿州','朔州','苏州','汕头','上饶','深圳','韶关','绥化','上海','石家庄','三明','三门峡','四平','商丘','宿迁','唐山','台湾','太原','台洲','泰州','天水','吐鲁番','铜陵','泰安','通化','天津','铁岭','通辽'],'8':['梧州','温州','无锡','渭南','乌鲁木齐','乌兰察布','芜湖','武汉','威海','潍坊','仙桃','邢台','新乡','信阳','新余','咸阳','徐州','忻州','湘潭','西宁','咸宁','西安','许昌','宣城','襄樊','孝感','香港','锡林洁特','厦门'],'9':['榆林','阳泉','鹰潭','烟台','义乌','玉溪','岳阳','益阳','永州','扬州','玉林','营口','云浮','延安','延安','雅安','宜宾','宜昌','宜春','伊春','运城','盐城','银川','肇庆','舟山','中山','遵义','株州','枣庄','郑州','重庆','驻马店','周口','张家口','张家界','江','湛江','珠海','自贡','淄博','漳州']};var cpSearch = ['安康@ak','澳门@am','安庆@aq','鞍山@as','安顺@as','包头@bt','本溪@bx','巴中@bz','滨州@bz','北京@bj','宝鸡@bj','毕节@bj','北海@bh','保定@bd','白城@bc','蚌埠@bb','郴州@cz','池州@cz','滁州@cz','长治@cz','常州@cz','沧州@cz','朝阳@cy','朝阳@cy','长沙@cs','长春@cc','成都@cd','常德@cd','承德@cd','赤峰@cf','巢湖@ch','达州@dz','德州@dz','东营@dy','大同@dt','大庆@dq','大连@dl','丹东@dd','东莞@d','鄂州@ez','二连浩特@elht','鄂尔多斯@eeds','抚州@fz','福州@fz','阜阳@fy','阜新@fx','佛山@fs','抚顺@fs','赣州@gz','广州@gz','广元@gy','贵阳@gy','桂林@gl','广安@ga','葫芦岛@hld','淮南@hn','黄山@hs','黄石@hs','衡水@hs','衡阳@hy','汉中@hz','杭州@hz','湖州@hz','惠州@hz','荷泽@hz','呼伦贝尔@hlbe','海口@hk','淮安@ha','鹤壁@hb','淮北@hb','邯郸@hd','哈尔滨@heb','合肥@hf','黄冈@hg','鹤岗@hg','黑河@hh','怀化@hh','呼和浩特@hhht','济宁@jn','嘉兴@jx','鸡西@jx','嘉峪关@jyg','锦州@jz','焦作@jz','荆州@jz','济南@jn','佳木斯@jms','荆门@jm','吉安@ja','晋城@jc','景德@jdz','金华@jh','九江@jj','吉林@jl','江门@jm','喀什@ks','昆明@km','克拉玛依@klmy','开封@kf','库尔勒@kel','龙岩@ly','临沂@ly','辽源@ly','辽阳@ly','连云港@lyg','兰州@lz','柳州@lz','洛阳@ly','莱芜@lw','拉萨@ls','六安@la','聊城@lc','娄底@ld','廊坊@lf','临汾@lf','六盘水@lps','丽水@ls','梅州@mz','绵阳@my','眉山@ms','牡丹江@mdj','马鞍山@mas','南阳@ny','南通@nt','南平@np','南宁@nn','内江@nj','南京@nj','宁德@nd','南充@nc','南昌@nc','宁波@nb','攀枝花@pzh','萍乡@px','莆田@pt','平凉@pl','盘锦@pj','平顶山@pds','钦州@qz','泉州@qz','清远@qy','齐齐哈尔@qqhe','曲靖@qj','潜江@qj','秦皇岛@qhd','青岛@qd','日照@rz','邵阳@sy','十堰@sy','沈阳@sy','绍兴@sx','三亚@sy','松原@sy','随州@sz','宿州@sz','朔州@sz','苏州@sz','汕头@st','上饶@sr','深圳@sz','韶关@sg','绥化@sh','上海@sh','石家庄@sjz','三明@sm','三门峡@smx','四平@sp','商丘@sq','宿迁@sq','唐山@ts','台湾@tw','太原@ty','台洲@tz','泰州@tz','天水@ts','吐鲁番@tlf','铜陵@tl','泰安@ta','通化@th','天津@tj','铁岭@tl','通辽@tl','梧州@wz','温州@wz','无锡@wx','渭南@wn','乌鲁木齐@wlmq','乌兰察布@wlcb','芜湖@wh','武汉@wh','威海@wh','潍坊@wf','仙桃@xt','邢台@xt','新乡@xx','信阳@xy','新余@xy','咸阳@xy','徐州@xz','忻州@xz','湘潭@xt','西宁@xn','咸宁@xn','西安@xa','许昌@xc','宣城@xc','襄樊@xf','孝感@xg','香港@xg','锡林洁特@xljt','厦门@xm','榆林@yl','阳泉@yq','鹰潭@yt','烟台@yt','义乌@yw','玉溪@yx','岳阳@yy','益阳@yy','永州@yz','扬州@yz','玉林@yl','营口@yk','云浮@yf','延安@ya','延安@ya','雅安@ya','宜宾@yb','宜昌@yc','宜春@yc','伊春@yc','运城@yc','盐城@yc','银川@yc','肇庆@zq','舟山@zs','中山@zs','遵义@zy','株州@zz','枣庄@zz','郑州@zz','重庆@zq','驻马店@zmd','周口@zk','张家口@zjk','张家界@zjj','江@zj','湛江@zj','珠海@zh','自贡@zg','淄博@zb','漳州@zz'];
var cpProv={'A-G':{12:{'name':'安徽'},0:{'name':'北京'},3:{'name':'重庆'},13:{'name':'福建'},27:{'name':'甘肃'},19:{'name':'广东'},20:{'name':'广西'},24:{'name':'贵州'}},'H-K':{21:{'name':'海南'},4:{'name':'河北'},9:{'name':'黑龙江'},16:{'name':'河南'},17:{'name':'湖北'},18:{'name':'湖南'},10:{'name':'江苏'},14:{'name':'江西'},8:{'name':'吉林'}},'L-S':{7:{'name':'辽宁'},6:{'name':'内蒙古'},29:{'name':'宁夏'},28:{'name':'青海'},15:{'name':'山东'},2:{'name':'上海'},5:{'name':'山西'},26:{'name':'陕西'},22:{'name':'四川'}},'T-Z':{1:{'name':'天津'},30:{'name':'新疆'},25:{'name':'西藏'},24:{'name':'云南'},11:{'name':'浙江'}}};
var cpCity=new Array();
cpCity['0']=['北京'];
cpCity['0-0']=['东城','西城','崇文','宣武','朝阳','丰台','石景山','海淀','门头沟','房山','通州','顺义','昌平','大兴','怀柔','平谷','密云','延庆','延庆'];
cpCity['1-0']=['和平','河东','河西','南开','河北','红桥','塘沽','汉沽','大港','东丽','西青','津南','北辰','武清','宝坻','蓟','宁河','芦台','静海','静海'];
cpCity['1']=['天津'];
cpCity['2-0']=['黄浦','卢湾','徐汇','长宁','静安','普陀','闸北','虹口','杨浦','闵行','宝山','嘉定','浦东新','金山','松江','青浦','南汇','奉贤','崇明','城桥'];
cpCity['2']=['上海'];
cpCity['3-0']=['渝中','大渡口','江北','沙坪坝','九龙坡','南岸','北碚','万盛','双桥','渝北','巴南','万州','涪陵','黔江','长寿','合川','永川','江津','南川','綦江','潼南','铜梁','大足','荣昌','璧山','垫江','武隆','丰都','城口','梁平','开','巫溪','巫山','奉节','云阳','忠','石柱','彭水','酉阳','秀山'];
cpCity['3']=['重庆'];
cpCity['4-0']=['长安','桥东','桥西','新华','裕华','井陉矿','辛集','藁城','晋州','新乐','鹿泉','井陉','微水','正定','正定','栾城','栾城','行唐','龙州','灵寿','灵寿','高邑','高邑','深泽','深泽','赞皇','赞皇','无极','无极','平山','平山','元氏','槐阳','赵','赵州'];
cpCity['4-1']=['桥西','桥东','宣化','下花园','张家口宣化','张北','康保','沽源','平定堡','尚义','南壕堑','蔚州','阳原','西城','怀安','柴沟堡','万全','孔家庄','怀来','沙城','涿鹿','涿鹿','赤城','赤城','崇礼','西湾子'];
cpCity['4-2']=['双桥','双滦','鹰手营子矿','承德','下板城','兴隆','兴隆','平泉','滦平','隆化','丰宁','大阁','宽城','围场'];
cpCity['4-3']=['海港','山海关','北戴河','昌黎','昌黎','抚宁','抚宁','卢龙','卢龙','青龙'];
cpCity['4-4']=['路北','路南','古冶','开平','丰润','丰南','遵化','迁安','滦','滦州','滦南','倴城','乐亭','迁西','兴城','玉田','唐海'];
cpCity['4-5']=['安次','广阳','霸州','三河','固安','固安','永清','永清','香河','淑阳','大城','平舒','文安','文安','大厂'];
cpCity['4-6']=['新','北','南','定州','涿州','安国','高碑店','满城','清苑','易州','徐水','安肃','涞源','定兴','顺平','蒲阳','唐','仁厚','望都','涞水','高阳','安新','雄州','容城','曲阳','恒州','阜平','博野','博陵','蠡吾'];
cpCity['4-7']=['桃城','冀州','深州','枣强','枣强','武邑','武邑','武强','武强','饶阳','饶阳','安平','安平','故城','郑口','景','景州','阜城','阜城'];
cpCity['4-8']=['运河','新华','泊头','任丘','黄骅','河间','沧','沧州新华','青','清州','东光','东光','海兴','苏基','盐山','盐山','肃宁','肃宁','南皮','南皮','吴桥','桑园','献','乐寿','孟村'];
cpCity['4-9']=['桥东','桥西','南宫','沙河','邢台','邢台桥东','临城','临城','内丘','内丘','柏乡','柏乡','隆尧','隆尧','任','任城','南和','和阳','宁晋','凤凰','巨鹿','巨鹿','新河','新河','广宗','广宗','平乡','丰州','威','洺州','清河','葛仙庄','临西','临西'];
cpCity['4-10']=['丛台','邯山','复兴','峰峰矿','武安','邯郸','南堡乡东小屯村','临漳','临漳','成安','成安','大名','大名','涉','涉城','磁','磁州','肥乡','肥乡','永年','临洺关','邱','新马头','鸡泽','鸡泽','广平','广平','馆陶','馆陶','魏','魏城','曲周','曲周'];
cpCity['4']=['石家庄','张家口','承德','秦皇岛','唐山','廊坊','保定','衡水','沧州','邢台','邯郸'];
cpCity['5-0']=['杏花岭','小店','迎泽','尖草坪','万柏林','晋源','古交','清徐','清源','阳曲','黄寨','娄烦','娄烦'];
cpCity['5-1']=['朔城','平鲁','山阴','岱岳乡','应','金城','右玉','新城','怀仁','云中'];
cpCity['5-2']=['城','矿','南郊','新荣','阳高','龙泉','天','玉泉','广灵','壶泉','灵丘','武灵','浑源','永安','左云','云兴','大同','西坪'];
cpCity['5-3']=['城','矿','郊','平定','冠山','盂','秀水'];
cpCity['5-4']=['城','郊','潞城','长治','韩店','襄垣','古韩','屯留','麟绛','平顺','青羊','黎城','黎侯','壶关','龙泉','长子','丹朱','武乡','丰州','沁','定昌','沁源','沁河'];
cpCity['5-5']=['城','高平','泽州','南村','沁水','龙港','阳城','凤城','陵川','崇文'];
cpCity['5-6']=['忻府','原平','定襄','晋昌','五台','台城','代','上馆','繁峙','繁城','宁武','凤凰','静乐','鹅城','神池','龙泉','五寨','砚城','岢岚','岚漪','河曲','文笔','保德','东关','偏关','新关'];
cpCity['5-7']=['榆次','介休','榆社','箕城','左权','辽阳','和顺','义兴','昔阳','乐平','寿阳','朝阳','太谷','明星','祁','昭余','平遥','古陶','灵石','翠峰'];
cpCity['5-8']=['尧都','侯马','霍州','曲沃','乐昌','翼城','唐兴','襄汾','新城','洪洞','大槐树','古','岳阳','安泽','府城','浮山','天坛','吉','吉昌','乡宁','昌宁','蒲','蒲城','大宁','昕水','永和','芝河','隰','龙泉','汾西','永安'];
cpCity['5-9']=['离石','孝义','汾阳','文水','凤城','中阳','宁乡','兴','蔚汾','临','临泉','方山','圪洞','柳林','柳林','岚','东村','交口','水头','交城','天宁','石楼','灵泉'];
cpCity['5-10']=['盐湖','永济','河津','芮城','古魏','临猗','猗氏','万荣','解店','新绛','龙兴','稷山','稷峰','闻喜','桐城','夏','瑶峰','绛','古绛','平陆','圣人涧','垣曲','新城'];
cpCity['5']=['太原','朔州','大同','阳泉','长治','晋城','忻州','晋中','临汾','吕梁','运城'];
cpCity['6-0']=['回民','新城','玉泉','赛罕','托克托','双河','武川','可可以力更','和林格尔','城关','清水河','城关','土默特左旗','察素齐'];
cpCity['6-1']=['昆都仑','东河','青山','石拐','白云矿','九原','固阳','金山','土默特右旗','萨拉齐','达尔罕茂明安联合旗','百灵庙'];
cpCity['6-2']=['海勃湾','海南','乌达'];
cpCity['6-3']=['红山','元宝山','松山','宁城','天义','林西','林西','阿鲁科尔沁旗','天山','巴林左旗','林东','巴林右旗','大板','克什克腾旗','经棚','翁牛特旗','乌丹','喀喇沁旗','锦山','敖汉旗','新惠'];
cpCity['6-4']=['科尔沁','霍林郭勒','开鲁','开鲁','库伦旗','库伦','奈曼旗','大沁他拉','扎鲁特旗','鲁北','科尔沁左翼中旗','保康','科尔沁左翼后旗','甘旗卡'];
cpCity['6-5']=['海拉尔','满洲里','扎兰屯','牙克石','根河','额尔古纳','阿荣旗','那吉','新巴尔虎右旗','阿拉坦额莫勒','新巴尔虎左旗','阿穆古郎','陈巴尔虎旗','巴彦库仁','鄂伦春旗','阿里河','鄂温克','巴彦托海','莫力达瓦达斡尔','尼尔基'];
cpCity['6-6']=['东胜','达拉特旗','树林召','准格尔旗','薛家湾','鄂托克前旗','敖勒召其','鄂托克旗','乌兰','杭锦旗','锡尼','乌审旗','嘎鲁图','伊金霍洛旗','阿勒腾席热'];
cpCity['6-7']=['集宁','丰','卓资','卓资山','化德','长顺','商都','商都','兴和','城关','凉城','岱海','察哈尔右翼前旗','土贵乌拉','察哈尔右翼中旗','科布尔','察哈尔右翼后旗','白音察干','四子王旗','乌兰花'];
cpCity['6-8']=['临河','五原','隆兴昌','磴口','巴彦高勒','乌拉特前旗','乌拉山','乌拉特中旗','海流图','乌拉特后旗','巴音宝力格','杭锦后旗','陕坝'];
cpCity['6-9']=['乌兰浩特','阿尔山','突泉','突泉','科尔沁右翼前旗','大坝沟','科尔沁右翼中旗','巴彦呼硕','扎赉特旗','音德尔'];
cpCity['6-10']=['锡林浩特','二连浩特','多伦','多伦淖尔','阿巴嘎旗','别力古台','苏尼特左旗','满都拉图','苏尼特右旗','赛汉塔拉','东乌珠穆沁旗','乌里雅斯太','西乌珠穆沁旗','巴拉嘎尔郭勒','太仆寺旗','宝昌','镶黄旗','新宝拉格','正镶白旗','明安图','正蓝旗','上都'];
cpCity['6-11']=['巴彦浩特','阿拉善右旗','额肯呼都格','额济纳旗','达来呼布'];
cpCity['6']=['呼和浩特','包头','乌海','赤峰','通辽','呼伦贝尔','鄂尔多斯','乌兰察布','巴彦淖尔','兴安盟','锡林郭勒盟','阿拉善盟'];
cpCity['7-0']=['沈河','和平','大东','皇姑','铁西','苏家屯','东陵','新城子','于洪','新民','辽中','辽中','康平','康平','法库','法库'];
cpCity['7-1']=['双塔','龙城','北票','凌源','朝阳','朝阳双塔','建平','喀喇沁','大城子'];
cpCity['7-2']=['海州','新邱','太平','清河门','细河','彰武','彰武','阜新'];
cpCity['7-3']=['银州','清河','调兵山','开原','铁岭','铁岭银州','西丰','西丰','昌图','昌图'];
cpCity['7-4']=['顺城','新抚','东洲','望花','抚顺','抚顺顺城','新宾','清原'];
cpCity['7-5']=['平山','溪湖','明山','南芬','本溪','小','桓仁'];
cpCity['7-6']=['白塔','文圣','宏伟','弓长岭','太子河','灯塔','辽阳','首山'];
cpCity['7-7']=['铁东','铁西','立山','千山','海城','台安','台安','岫岩'];
cpCity['7-8']=['振兴','元宝','振安','凤城','东港','宽甸'];
cpCity['7-9']=['西岗','中山','沙河口','甘井子','旅顺口','金州','瓦房店','普兰店','庄河','长海','大长山岛'];
cpCity['7-10']=['站前','西','鲅鱼圈','老边','大石桥','盖州'];
cpCity['7-11']=['兴隆台','双台子','大洼','大洼','盘山','盘锦双台子'];
cpCity['7-12']=['太和','古塔','凌河','凌海','北宁','黑山','黑山','义','义州'];
cpCity['7-13']=['龙港','连山','南票','兴城','绥中','绥中','建昌','建昌'];
cpCity['7']=['沈阳','朝阳','阜新','铁岭','抚顺','本溪','辽阳','鞍山','丹东','大连','营口','盘锦','锦州','葫芦岛'];
cpCity['8-0']=['朝阳','南关','宽城','二道','绿园','双阳','德惠','九台','榆树','农安','农安'];
cpCity['8-1']=['洮北','大安','洮南','赉','赉','通榆','开通'];
cpCity['8-2']=['宁江','扶余','三岔河','长岭','长岭','乾安','乾安','前郭'];
cpCity['8-3']=['船营','龙潭','昌邑','丰满','磐石','蛟河','桦甸','舒兰','永吉','口前'];
cpCity['8-4']=['铁西','铁东','双辽','公主岭','梨树','梨树','伊通'];
cpCity['8-5']=['龙山','西安','东丰','东丰','东辽','白泉'];
cpCity['8-6']=['东昌','二道江','梅河口','集安','通化','快大茂','辉南','朝阳','柳河','柳河'];
cpCity['8-7']=['八道江','临江','江源','孙家堡子','抚松','抚松','靖宇','靖宇','长白'];
cpCity['8-8']=['延吉','图们','敦化','珲春','龙井','和龙','汪清','汪清','安图','明月'];
cpCity['8']=['长春','白城','松原','吉林','四平','辽源','通化','白山','延边州'];
cpCity['9-0']=['松北','道里','南岗','道外','香坊','动力','平房','呼兰','双城','尚志','五常','阿城','依兰','方正','宾州','巴彦','木兰','通河','延寿'];
cpCity['9-1']=['建华','龙沙','铁锋','昂昂溪','富拉尔基','碾子山','梅里斯','讷河','龙江','依安','泰来','甘南','富裕','克山','克东','拜泉'];
cpCity['9-2']=['桃山','新兴','茄子河','勃利','勃利'];
cpCity['9-3']=['爱辉','北安','五大连池','嫩江','嫩江','逊克','边疆','孙吴','孙吴'];
cpCity['9-4']=['萨尔图','龙凤','让胡路','大同','红岗','肇州','肇源','林甸','杜尔伯特','泰康'];
cpCity['9-5']=['兴山','向阳','工农','南山','兴安','东山','萝北','凤翔','绥滨','绥滨'];
cpCity['9-6']=['伊春','南岔','友好','西林','翠峦','新青','美溪','金山屯','五营','乌马河','汤旺河','带岭','乌伊岭','红星','上甘岭','铁力','嘉荫','朝阳'];
cpCity['9-7']=['前进','永红','向阳','东风','郊','同江','富锦','桦南','桦南','桦川','悦来','汤原','汤原','抚远','抚远'];
cpCity['9-8']=['尖山','岭东','四方台','宝山','集贤','福利','友谊','友谊','宝清','宝清','饶河','饶河'];
cpCity['9-9']=['鸡冠','恒山','滴道','梨树','城子河','麻山','虎林','密山','鸡东','鸡东'];
cpCity['9-10']=['爱民','东安','阳明','西安','穆棱','绥芬河','海林','宁安','东宁','东宁','林口','林口'];
cpCity['9-11']=['北林','安达','肇东','海伦','望奎','望奎','兰西','兰西','青冈','青冈','庆安','庆安','明水','明水','绥棱','绥棱'];
cpCity['9-12']=['呼玛','呼玛','塔河','塔河','漠河','西林吉'];
cpCity['9']=['哈尔滨','齐齐哈尔','七台河','黑河','大庆','鹤岗','伊春','佳木斯','双鸭山','鸡西','牡丹江','绥化','大兴安岭地'];
cpCity['10-0']=['玄武','白下','秦淮','建邺','鼓楼','下关','浦口','六合','栖霞','雨花台','江宁','溧水','永阳','高淳','淳溪'];
cpCity['10-1']=['云龙','鼓楼','九里','贾汪','泉山','邳州','新沂','铜山','铜山','睢宁','睢城','沛','沛城','丰','凤城'];
cpCity['10-2']=['新浦','连云','海州','赣榆','青口','灌云','伊山','东海','牛山','灌南','新安'];
cpCity['10-3']=['宿城','宿豫','沭阳','沭城','泗阳','众兴','泗洪','青阳'];
cpCity['10-4']=['清河','清浦','楚州','淮阴','金湖','黎城','盱眙','盱城','洪泽','高良涧','涟水','涟城'];
cpCity['10-5']=['亭湖','盐都','东台','大丰','射阳','合德','阜宁','阜城','滨海','东坎','响水','响水','建湖','近湖'];
cpCity['10-6']=['维扬','广陵','邗江','仪征','江都','高邮','宝应','安宜'];
cpCity['10-7']=['海陵','高港','靖江','泰兴','姜堰','兴化'];
cpCity['10-8']=['崇川','港闸','海门','启东','通州','如皋','如东','掘港','海安','海安'];
cpCity['10-9']=['京口','润州','丹徒','扬中','丹阳','句容'];
cpCity['10-10']=['钟楼','天宁','戚墅堰','新北','武进','金坛','溧阳'];
cpCity['10-11']=['崇安','南长','北塘','滨湖','惠山','锡山','江阴','宜兴'];
cpCity['10-12']=['金阊','沧浪','平江','虎丘','吴中','相城','吴江','昆山','太仓','常熟','张家港'];
cpCity['10']=['南京','徐州','连云港','宿迁','淮安','盐城','扬州','泰州','南通','江','常州','无锡','苏州'];
cpCity['11-0']=['拱墅','上城','下城','江干','西湖','滨江','余杭','萧山','临安','富阳','建德','桐庐','淳安','千岛湖'];
cpCity['11-1']=['吴兴','南浔','长兴','雉城','德清','武康','安吉','递铺'];
cpCity['11-2']=['南湖','秀洲','平湖','海宁','桐乡','嘉善','魏塘','海盐','武原'];
cpCity['11-3']=['定海','普陀','岱山','高亭','嵊泗','菜园'];
cpCity['11-4']=['海曙','江东','江北','北仑','海','鄞州','慈溪','余姚','奉化','宁海','象山'];
cpCity['11-5']=['越城','诸暨','上虞','嵊州','绍兴','新昌','城关'];
cpCity['11-6']=['柯城','衢江','江山','常山','天马','开化','城关','龙游'];
cpCity['11-7']=['婺城','金东','兰溪','永康','义乌','东阳','武义','浦江','磐安','安文'];
cpCity['11-8']=['椒江','黄岩','路桥','临海','温岭','三门','海游','天台','仙居','玉环','珠港'];
cpCity['11-9']=['鹿城','龙湾','瓯海','瑞安','乐清','永嘉','上塘','文成','大峃','平阳','昆阳','泰顺','罗阳','洞头','北岙','苍南','灵溪'];
cpCity['11-10']=['莲都','龙泉','缙云','五云','青田','鹤城','云和','云和','遂昌','妙高','松阳','西屏','庆元','松源','景宁','鹤溪'];
cpCity['11']=['杭州','湖州','嘉兴','舟山','宁波','绍兴','衢州','金华','台州','温州','丽水'];
cpCity['12-0']=['庐阳','瑶海','蜀山','包河','长丰','水湖','肥东','店埠','肥西','上派'];
cpCity['12-1']=['埇桥','砀山','砀城','萧','龙城','灵璧','灵城','泗','泗城'];
cpCity['12-2']=['相山','杜集','烈山','濉溪','濉溪'];
cpCity['12-3']=['谯城','涡阳','城关','蒙城','城关','利辛','城关'];
cpCity['12-4']=['颍州','颍东','颍泉','界首','临泉','城关','太和','城关','阜南','城关','颍上','慎城'];
cpCity['12-5']=['蚌山','龙子湖','禹会','淮上','怀远','城关','五河','城关','固','城关'];
cpCity['12-6']=['田家庵','大通','谢家集','八公山','潘集','凤台','城关'];
cpCity['12-7']=['琅','南谯','明光','天长','来安','新安','全椒','襄河','定远','定城','凤阳','府城'];
cpCity['12-8']=['雨山','花山','金家庄','当涂','姑孰'];
cpCity['12-9']=['镜湖','弋江','三山','鸠江','芜湖','湾','繁昌','繁阳','南陵','籍山'];
cpCity['12-10']=['铜官山','狮子山','郊','铜陵','五松'];
cpCity['12-11']=['迎江','大观','宜秀','桐城','怀宁','高河','枞阳','枞阳','潜山','梅城','太湖','晋熙','宿松','孚玉','望江','雷阳','岳西','天堂'];
cpCity['12-12']=['屯溪','黄山','徽州','歙','徽城','休宁','海阳','黟','碧阳','祁门','祁山'];
cpCity['12-13']=['金安','裕安','寿','寿春','霍邱','城关','舒城','城关','金寨','梅山','霍山','衡山'];
cpCity['12-14']=['居巢','庐江','庐城','无为','无城','含山','环峰','和','历阳'];
cpCity['12-15']=['贵池','东至','尧渡','石台','七里','青阳','蓉城'];
cpCity['12-16']=['宣州','宁国','郎溪','建平','广德','桃州','泾','泾川','旌德','旌阳','绩溪','华阳'];
cpCity['12']=['合肥','宿州','淮北','亳州','阜阳','蚌埠','淮南','滁州','马鞍山','芜湖','铜陵','安庆','黄山','六安','巢湖','池州','宣城'];
cpCity['13-0']=['鼓楼','台江','仓山','马尾','晋安','福清','长乐','闽侯','连江','凤城','罗源','凤山','闽清','梅城','永泰','樟城','平潭','潭城'];
cpCity['13-1']=['延平','邵武','武夷山','建瓯','建阳','顺昌','浦城','光泽','杭川','松溪','松源','政和','熊山'];
cpCity['13-2']=['城厢','涵江','荔城','秀屿','仙游'];
cpCity['13-3']=['梅列','三元','永安','明溪','雪峰','清流','龙津','宁化','翠江','大田','均溪','尤溪','城关','沙','将乐','古镛','泰宁','杉城','建宁','濉城'];
cpCity['13-4']=['鲤城','丰泽','洛江','泉港','石狮','晋江','南安','惠安','螺城','安溪','凤城','永春','桃城','德化','浔中','金门','☆'];
cpCity['13-5']=['思明','海沧','湖里','集美','同安','翔安'];
cpCity['13-6']=['芗城','龙文','龙海','云霄','云陵','漳浦','绥安','诏安','南诏','长泰','武安','东山','西埔','南靖','山城','平和','小溪','华安','华丰'];
cpCity['13-7']=['新罗','漳平','长汀','汀州','永定','凤城','上杭','临江','武平','平川','连城','莲峰'];
cpCity['13-8']=['蕉城','福安','福鼎','寿宁','鳌阳','霞浦','柘荣','双城','屏南','古峰','古田','周宁','狮城'];
cpCity['13']=['福州','南平','莆田','三明','泉州','厦门','漳州','龙岩','宁德'];
cpCity['14-0']=['东湖','西湖','青云谱','湾里','青山湖','南昌','莲塘','新建','长堎','安义','龙津','进贤','民和'];
cpCity['14-1']=['浔阳','庐山','瑞昌','九江','沙河街','武宁','新宁','修水','义宁','永修','涂埠','德安','蒲亭','星子','南康','都昌','都昌','湖口','双钟','彭泽','龙城'];
cpCity['14-2']=['珠山','昌江','乐平','浮梁','浮梁'];
cpCity['14-3']=['月湖','贵溪','余江','邓埠'];
cpCity['14-4']=['渝水','分宜','分宜'];
cpCity['14-5']=['安源','湘东','莲花','琴亭','上栗','上栗','芦溪','芦溪'];
cpCity['14-6']=['章贡','瑞金','南康','赣','梅林','信丰','嘉定','大余','南安','上犹','东山','崇义','横水','安远','欣山','龙南','龙南','定南','历','全南','城厢','宁都','梅江','于都','贡江','兴国','潋江','会昌','文武坝','寻乌','长宁','石城','琴江'];
cpCity['14-7']=['信州','德兴','上饶','旭日','广丰','永丰','玉山','冰溪','铅山','河口','横峰','岑阳','弋阳','弋江','余干','玉亭','鄱阳','鄱阳','万年','陈营','婺源','紫阳'];
cpCity['14-8']=['临川','南城','建昌','黎川','日峰','南丰','琴城','崇仁','巴山','乐安','鳌溪','宜黄','凤冈','金溪','秀谷','资溪','鹤城','东乡','孝岗','广昌','旴江'];
cpCity['14-9']=['袁州','丰城','樟树','高安','奉新','冯川','万载','上高','宜丰','新昌','靖安','双溪','铜鼓','永宁'];
cpCity['14-10']=['吉州','青原','井冈山','厦坪','吉安','敦厚','吉水','文峰','峡江','水边','新干','金川','永丰','恩江','泰和','澄江','遂川','泉江','万安','芙蓉','安福','平都','永新','禾川'];
cpCity['14']=['南昌','九江','景德','鹰潭','新余','萍乡','赣州','上饶','抚州','宜春','吉安'];
cpCity['15-0']=['中','历下','槐荫','天桥','历城','长清','章丘','平阴','平阴','济阳','济阳','商河'];
cpCity['15-1']=['南','北','四方','黄岛','崂山','城阳','李沧','胶州','即墨','平度','胶南','莱西'];
cpCity['15-2']=['东昌府','临清','阳谷','莘','茌平','东阿','冠','冠城','高唐'];
cpCity['15-3']=['德城','乐陵','禹城','陵','陵城','平原','夏津','夏津','武城','武城','齐河','晏城','临邑','宁津','宁津','庆云','庆云'];
cpCity['15-4']=['东营','河口','垦利','垦利','利津','利津','广饶','广饶'];
cpCity['15-5']=['张店','淄川','博山','临淄','周村','桓台','索','高青','田','沂源','南麻'];
cpCity['15-6']=['潍城','寒亭','坊子','奎文','安丘','昌邑','高密','青州','诸城','寿光','临朐','昌乐'];
cpCity['15-7']=['莱山','芝罘','福山','牟平','栖霞','海阳','龙口','莱阳','莱州','蓬莱','招远','长岛','南长山'];
cpCity['15-8']=['环翠','荣成','乳山','文登'];
cpCity['15-9']=['东港','岚山','五莲','洪凝','莒','城阳'];
cpCity['15-10']=['兰山','罗庄','河东','郯城','郯城','苍山','卞庄','莒南','十字路','沂水','沂水','蒙阴','蒙阴','平邑','平邑','费','费城','沂南','界湖','临沭','临沭'];
cpCity['15-11']=['薛城','中','峄城','台儿庄','山亭','滕州'];
cpCity['15-12']=['中','任城','曲阜','兖州','邹城','微山','鱼台','谷亭','金乡','金乡','嘉祥','嘉祥','汶上','汶上','泗水','梁山','梁山'];
cpCity['15-13']=['泰山','岱岳','新泰','肥城','宁阳','宁阳','东平','东平'];
cpCity['15-14']=['莱城','钢城'];
cpCity['15-15']=['滨城','惠民','惠民','阳信','阳信','无棣','无棣','沾化','富国','博兴','博兴','邹平'];
cpCity['15-16']=['牡丹','曹','曹城','定陶','定陶','成武','成武','单','单城','巨野','巨野','郓城','郓城','鄄城','鄄城','东明','城关'];
cpCity['15']=['济南','青岛','聊城','德州','东营','淄博','潍坊','烟台','威海','日照','临沂','枣庄','济宁','泰安','莱芜','滨州','菏泽'];
cpCity['16-0']=['中原','二七','管城','金水','上街','惠济','新郑','登封','新密','巩义','荥阳','中牟','城关'];
cpCity['16-1']=['鼓楼','龙亭','顺河','禹王台','金明','杞','城关','通许','城关','尉氏','城关','开封','城关','兰考','城关'];
cpCity['16-2']=['湖滨','义马','灵宝','渑池','城关','陕','大营','卢氏','城关'];
cpCity['16-3']=['西工','老城','瀍河','涧西','吉利','洛龙','偃师','孟津','城关','新安','城关','栾川','城关','嵩','城关','汝阳','城关','宜阳','城关','洛宁','城关','伊川','城关'];
cpCity['16-4']=['解放','山阳','中站','马村','孟州','沁阳','修武','城关','博爱','清化','武陟','木城','温','温泉'];
cpCity['16-5']=['卫滨','红旗','凤泉','牧野','卫辉','辉','新乡','新乡红旗','获嘉','城关','原阳','城关','延津','城关','封丘','城关','长垣','城关'];
cpCity['16-6']=['淇滨','山城','鹤山','浚','城关','淇','朝歌'];
cpCity['16-7']=['北关','文峰','殷都','龙安','林州','安阳','安阳北关','汤阴','城关','滑','道口','内黄','城关'];
cpCity['16-8']=['华龙','清丰','城关','南乐','城关','范','城关','台前','城关','濮阳','城关'];
cpCity['16-9']=['梁园','睢阳','永城','虞城','城关','民权','城关','宁陵','城关','睢','城关','夏邑','城关','柘城','城关'];
cpCity['16-10']=['魏都','禹州','长葛','许昌','许昌魏都','鄢陵','安陵','襄城','城关'];
cpCity['16-11']=['源汇','郾城','召陵','舞阳','舞泉','临颍','城关'];
cpCity['16-12']=['新华','卫东','湛河','石龙','舞钢','汝州','宝丰','城关','叶','昆阳','鲁山','鲁阳','郏','城关'];
cpCity['16-13']=['卧龙','宛城','邓州','南召','城关','方城','城关','西峡','平','城关','内乡','城关','淅川','社旗','赊店','唐河','新野','城关','桐柏','城关'];
cpCity['16-14']=['河','平桥','息','城关','淮滨','城关','潢川','光山','固始','城关','商城','城关','罗山','城关','新','新集'];
cpCity['16-15']=['川汇','项城','扶沟','城关','西华','城关','商水','城关','太康','城关','鹿邑','城关','郸城','城关','淮阳','城关','沈丘','槐店'];
cpCity['16-16']=['驿城','确山','盘龙','泌阳','泌水','遂平','灈阳','西平','上蔡','蔡都','汝南','汝宁','平舆','古槐','新蔡','古吕','正阳','真阳'];
cpCity['16']=['郑州','开封','三门峡','洛阳','焦作','新乡','鹤壁','安阳','濮阳','商丘','许昌','漯河','平顶山','南阳','信阳','周口','驻马店'];
cpCity['17-0']=['江岸','江汉','硚口','汉阳','武昌','青山','洪山','东西湖','汉南','蔡甸','江夏','黄陂','新洲'];
cpCity['17-1']=['张湾','茅箭','丹江口','郧','城关','竹山','城关','房','城关','郧西','城关','竹溪','城关'];
cpCity['17-2']=['襄城','樊城','襄阳','老河口','枣阳','宜城','南漳','城关','谷城','城关','保康','城关'];
cpCity['17-3']=['东宝','掇刀','钟祥','沙洋','沙洋','京山','新'];
cpCity['17-4']=['孝南','应城','安陆','汉川','孝昌','花园','大悟','城关','云梦','城关'];
cpCity['17-5']=['黄州','麻城','武穴','红安','城关','罗田','凤山','英山','温泉','浠水','清泉','蕲春','漕河','黄梅','黄梅','团风','团风'];
cpCity['17-6']=['鄂城','梁子湖','华容'];
cpCity['17-7']=['黄石港','西塞山','下陆','铁山','大冶','阳新','兴国'];
cpCity['17-8']=['咸安','赤壁','嘉鱼','鱼岳','通城','隽水','崇阳','天城','通山','通羊'];
cpCity['17-9']=['沙','荆州','石首','洪湖','松滋','江陵','郝穴','公安','斗湖堤','监利','容城'];
cpCity['17-10']=['西陵','伍家岗','点军','猇亭','夷陵','枝江','宜都','当阳','远安','鸣凤','兴山','古夫','秭归','茅坪','长阳','龙舟坪','五峰','五峰'];
cpCity['17-11']=['曾都','广水'];
cpCity['17-12']=['仙桃','天门','潜江','神农架林','松柏'];
cpCity['17-13']=['恩施','利川','建始','业州','巴东','信陵','宣恩','珠山','咸丰','高乐山','来凤','翔凤','鹤峰','容美'];
cpCity['17']=['武汉','十堰','襄樊','荆门','孝感','黄冈','鄂州','黄石','咸宁','荆州','宜昌','随州','省直辖级行政单位','恩施州'];
cpCity['18-0']=['长沙','岳麓','芙蓉','天心','开福','雨花','浏阳','长沙','星沙','望城','高塘岭','宁乡','玉潭'];
cpCity['18-1']=['永定','武陵源','慈利','零阳','桑植','澧源'];
cpCity['18-2']=['武陵','鼎城','津','安乡','城关','汉寿','龙阳','澧','澧阳','临澧','安福','桃源','漳江','石门','楚江'];
cpCity['18-3']=['赫山','资阳','沅江','南','南洲','桃江','桃花江','安化','东坪'];
cpCity['18-4']=['岳阳楼','君山','云溪','汨罗','临湘','岳阳','荣家湾','华容','城关','湘阴','文星','平江','汉昌'];
cpCity['18-5']=['天元','荷塘','芦淞','石峰','醴陵','株洲','渌口','攸','城关','茶陵','城关','炎陵','霞阳'];
cpCity['18-6']=['岳塘','雨湖','湘乡','韶山','湘潭','易俗河'];
cpCity['18-7']=['雁峰','珠晖','石鼓','蒸湘','南岳','常宁','耒阳','衡阳','西渡','衡南','云集','衡山','开云','衡东','城关','祁东','洪桥'];
cpCity['18-8']=['北湖','苏仙','资兴','桂阳','城关','永兴','城关','宜章','城关','嘉禾','城关','临武','城关','汝城','城关','桂东','城关','安仁','城关'];
cpCity['18-9']=['冷水滩','零陵','东安','白牙','道','道江','宁远','舜陵','江永','潇浦','蓝山','塔峰','新田','龙泉','双牌','泷泊','祁阳','浯溪','江华','沱江'];
cpCity['18-10']=['双清','大祥','北塔','武冈','邵东','两','邵阳','塘渡口','新邵','酿溪','隆回','桃洪','洞口','洞口','绥宁','长铺','新宁','金石','城步','儒林'];
cpCity['18-11']=['鹤城','洪江','沅陵','沅陵','辰溪','辰阳','溆浦','卢峰','中方','中方','会同','林城','麻阳','高村','新晃','芷江','靖州','渠阳','通道','双江'];
cpCity['18-12']=['娄星','冷水江','涟源','双峰','永丰','新化','上梅'];
cpCity['18-13']=['吉首','泸溪','白沙','凤凰','沱江','花垣','花垣','保靖','迁陵','古丈','古阳','永顺','灵溪','龙山'];
cpCity['18']=['长沙','张家界','常德','益阳','岳阳','株洲','湘潭','衡阳','郴州','永州','邵阳','怀化','娄底','湘西州'];
cpCity['19-0']=['越秀','荔湾','海珠','天河','白云','黄埔','番禺','花都','南沙','萝岗','增城','从化'];
cpCity['19-1']=['福田','罗湖','南山','宝安','龙岗','盐田'];
cpCity['19-2']=['清城','英德','连州','佛冈','石角','阳山','阳城','清新','太和','连山','吉田','连南','三江'];
cpCity['19-3']=['浈江','武江','曲江','乐昌','南雄','始兴','太平','仁化','仁化','翁源','龙仙','新丰','乳源','乳城'];
cpCity['19-4']=['源城','紫金','紫城','龙川','老隆','连平','元善','和平','阳明','东源','仙塘'];
cpCity['19-5']=['梅江','兴宁','梅','程江','大埔','湖寮','丰顺','汤坑','五华','水寨','平远','大柘','蕉岭','蕉城'];
cpCity['19-6']=['湘桥','潮安','庵埠','饶平','黄冈'];
cpCity['19-7']=['金平','濠江','龙湖','潮阳','潮南','澄海','南澳','后宅'];
cpCity['19-8']=['榕城','普宁','揭东','曲溪','揭西','河婆','惠来','惠城'];
cpCity['19-9']=['城','陆丰','海丰','海城','陆河','河田'];
cpCity['19-10']=['惠城','惠阳','博罗','罗阳','惠东','龙门'];
cpCity['19-12']=['香洲','斗门','金湾'];
cpCity['19-14']=['江海','蓬江','新会','恩平','台山','开平','鹤山'];
cpCity['19-15']=['禅城','南海','顺德','三水','高明'];
cpCity['19-16']=['端州','鼎湖','高要','四会','广宁','南街','怀集','怀城','封开','江口','德庆'];
cpCity['19-17']=['云城','罗定','云安','六都','新兴','新城','郁南','都城'];
cpCity['19-18']=['江城','阳春','阳西','织','阳东','东城'];
cpCity['19-19']=['茂南','茂港','化州','信宜','高州','电白','水东'];
cpCity['19-20']=['赤坎','霞山','坡头','麻章','吴川','廉江','雷州','遂溪','遂城','徐闻','撤销广州东山','芳村','设立广州南沙','萝岗'];
cpCity['19']=['广州','深圳','清远','韶关','河源','梅州','潮州','汕头','揭阳','汕尾','惠州','东莞','珠海','中山','江门','佛山','肇庆','云浮','阳江','茂名','湛江'];
cpCity['20-0']=['青秀','兴宁','江南','西乡塘','良庆','邕宁','武鸣','横','宾阳','上林','隆安','马山'];
cpCity['20-1']=['象山','叠彩','秀峰','七星','雁山','阳朔','临桂','灵川','全州','兴安','永福','灌阳','资源','资源','平乐','荔浦','荔城','龙胜','恭城'];
cpCity['20-2']=['城中','鱼峰','柳南','柳北','柳江','拉堡','柳城','大埔','鹿寨','融安','长安','三江','古宜','融水'];
cpCity['20-3']=['万秀','蝶山','长洲','岑溪','苍梧','龙圩','藤','藤州','蒙山'];
cpCity['20-4']=['港北','港南','覃塘','桂平','平南','平南'];
cpCity['20-5']=['玉州','北流','兴业','石南','容州','陆川','陆城','博白'];
cpCity['20-6']=['钦南','钦北','灵山','灵城','浦北','小江'];
cpCity['20-7']=['海城','银海','铁山港','合浦','廉州'];
cpCity['20-8']=['港口','防城','东兴','上思','思阳'];
cpCity['20-9']=['江州','凭祥','扶绥','新宁','大新','桃城','天等','宁明','城中','龙州'];
cpCity['20-10']=['右江','田阳','田州','田东','平马','平果','马头','德保','城关','靖西','新靖','那坡','城厢','凌云','泗城','乐业','同乐','西林','八达','田林','乐里','隆林','新州'];
cpCity['20-11']=['金城江','宜州','南丹','城关','天峨','六排','凤山','凤城','东兰','东兰','巴马','都安','安阳','大化','罗城仫','东门','环江毛','思恩'];
cpCity['20-12']=['兴宾','合山','象州','象州','武宣','武宣','忻城','城关','金秀'];
cpCity['20-13']=['八步','昭平','昭平','钟山','钟山','富川','富阳'];
cpCity['20']=['南宁','桂林','柳州','梧州','贵港','玉林','钦州','北海','防城港','崇左','百色','河池','来宾','贺州'];
cpCity['21-0']=['龙华','秀英','琼山','美兰'];
cpCity['21-2']=['文昌','琼海','万宁','五指山','东方','儋州','临高','临城','澄迈','金江','定安','定城','屯昌','屯城','昌江','石碌','白沙','牙叉','琼中','营根','陵水','椰林','保亭','保城','乐东','抱由'];
cpCity['21']=['海口','三亚','省直辖行政单位'];
cpCity['22-0']=['青羊','锦江','金牛','武侯','成华','龙泉驿','青白江','新都','温江','都江堰','彭州','邛崃','崇州','金堂','赵','双流','郫','郫筒','大邑','晋原','蒲江','鹤山','新津','五津'];
cpCity['22-1']=['中','元坝','朝天','旺苍','东河','青川','乔庄','剑阁','下寺','苍溪','陵江'];
cpCity['22-2']=['涪城','游仙','江油','三台','潼川','盐亭','云溪','安','花荄','梓潼','文昌','北川','曲山','平武','龙安'];
cpCity['22-3']=['旌阳','什邡','广汉','绵竹','罗江','罗江','中江','凯江'];
cpCity['22-4']=['顺庆','高坪','嘉陵','阆中','南部','南隆','营山','朗池','蓬安','周口','仪陇','新政','西充','晋城'];
cpCity['22-5']=['广安','华蓥','岳池','九龙','武胜','沿口','邻水','鼎屏'];
cpCity['22-6']=['船山','安居','蓬溪','赤城','射洪','太和','大英','蓬莱'];
cpCity['22-7']=['中','东兴','威远','严陵','资中','重龙','隆昌','金鹅'];
cpCity['22-8']=['中','沙湾','五通桥','金口河','峨眉山','犍为','玉津','井研','研城','夹江','漹城','沐川','沐溪','峨边','沙坪','马边','民建'];
cpCity['22-9']=['自流井','大安','贡井','沿滩','荣','旭阳','富顺','富世'];
cpCity['22-10']=['江阳','纳溪','龙马潭','泸','福集','合江','合江','叙永','叙永','古蔺','古蔺'];
cpCity['22-11']=['翠屏','宜宾','柏溪','南溪','南溪','江安','江安','长宁','长宁','高','庆符','筠连','筠连','珙','巡场','兴文','中城','屏山','屏山'];
cpCity['22-12']=['东','西','仁和','米易','攀莲','盐边','桐子林'];
cpCity['22-13']=['巴州','通江','诺江','南江','南江','平昌','江口'];
cpCity['22-14']=['通川','万源','达','南外','宣汉','东乡','开江','新宁','大竹','竹阳','渠','渠江'];
cpCity['22-15']=['雁江','简阳','乐至','天池','安岳','岳阳'];
cpCity['22-16']=['东坡','仁寿','文林','彭山','凤鸣','洪雅','洪川','丹棱','丹棱','青神','城厢'];
cpCity['22-17']=['雨城','名山','蒙阳','荥经','严道','汉源','富林','石棉','新棉','天全','城厢','芦山','芦阳','宝兴','穆坪'];
cpCity['22-18']=['马尔康','马尔康','汶川','威州','理','杂谷脑','茂','凤仪','松潘','进安','九寨沟','永乐','金川','金川','小金','美兴','黑水','芦花','壤塘','壤柯','阿坝','阿坝','若尔盖','达扎寺','红原','邛溪'];
cpCity['22-19']=['康定','炉城','泸定','泸桥','丹巴','章谷','九龙','呷尔','雅江','河口','道孚','鲜水','炉霍','新都','甘孜','甘孜','新龙','茹龙','德格','更庆','白玉','建设','石渠','尼呷','色达','色柯','理塘','高城','巴塘','夏邛','乡城','桑披','稻城','金珠','得荣','松麦'];
cpCity['22-20']=['西昌','盐源','盐井','德昌','德州','会理','城关','会东','会东','宁南','披砂','普格','普基','布拖','特木里','金阳','天地坝','昭觉','新城','喜德','光明','冕宁','城厢','越西','越城','甘洛','新坝','美姑','巴普','雷波','锦城','木里','乔瓦'];
cpCity['22']=['成都','广元','绵阳','德阳','南充','广安','遂宁','内江','乐山','自贡','泸州','宜宾','攀枝花','巴中','达州','资阳','眉山','雅安','阿坝州','甘孜州','凉山州'];
cpCity['23-0']=['乌当','南明','云岩','花溪','白云','小河','清','开阳','城关','修文','龙场','息烽','永靖'];
cpCity['23-1']=['钟山','盘','红果','六枝特','平寨','水城'];
cpCity['23-2']=['红花岗','汇川','赤水','仁怀','遵义','南白','桐梓','娄山关','绥阳','洋川','正安','凤仪','凤冈','龙泉','湄潭','湄江','余庆','白泥','习水','东皇','道真仡','玉溪','务川仡','都濡'];
cpCity['23-3']=['西秀','平坝','城关','普定','城关','关岭布','关索','宁布','城关','紫云布','松山'];
cpCity['23-4']=['毕节','大方','大方','黔西','城关','金沙','城关','织金','城关','纳雍','雍熙','赫章','城关','威宁','草海'];
cpCity['23-5']=['铜仁','江口','双江','石阡','汤山','思南','思唐','德江','青龙','玉屏','平溪','印江','峨岭','沿河','和平','松桃','蓼皋','万山特','万山'];
cpCity['23-6']=['凯里','黄平','新州','施秉','城关','三穗','八弓','远','阳','岑巩','思旸','天柱','凤城','锦屏','三江','剑河','革东','台江','台拱','黎平','德凤','榕江','古州','从江','丙妹','雷山','丹江','麻江','杏山','丹寨','龙泉'];
cpCity['23-7']=['都匀','福泉','荔波','玉屏','贵定','城关','瓮安','雍阳','独山','城关','平塘','平湖','罗甸','龙坪','长顺','长寨','龙里','龙山','惠水','和平','三都','三合'];
cpCity['23-8']=['兴义','兴仁','城关','普安','盘水','晴隆','莲城','贞丰','珉谷','望谟','复兴','册亨','者楼','安龙','新安','剑河人民政府驻地由柳川迁至革东'];
cpCity['23']=['贵阳','六盘水','遵义','安顺','毕节地','铜仁地','黔东南州','黔南州','黔西南州'];
cpCity['24-0']=['盘龙','五华','官渡','西山','东川','安宁','呈贡','龙城','晋宁','昆阳','富民','永定','宜良','匡远','嵩明','嵩阳','石林','鹿阜','禄劝','屏山','寻甸','仁德'];
cpCity['24-1']=['麒麟','宣威','马龙','通泉','沾益','西平','富源','中安','罗平','罗雄','师宗','丹凤','陆良','中枢','会泽','金钟'];
cpCity['24-2']=['红塔','江川','大街','澄江','凤麓','通海','秀山','华宁','宁州','易门','龙泉','峨山','双江','新平','桂山','元江','澧江'];
cpCity['24-3']=['隆阳','施甸','甸阳','腾冲','腾越','龙陵','龙山','昌宁','田园'];
cpCity['24-4']=['昭阳','鲁甸','文屏','巧家','新华','盐津','盐井','大关','翠华','永善','溪落渡','绥江','中城','雄','乌峰','彝良','角奎','威信','扎西','水富','向家坝'];
cpCity['24-5']=['古城','永胜','永北','华坪','中心','玉龙纳','黄山','宁蒗','大兴'];
cpCity['24-6']=['翠云','普洱','宁洱','墨江','联珠','景东','锦屏','景谷','威远','恩乐','江城','勐烈','孟连','娜允','澜沧','勐朗','西盟','勐梭'];
cpCity['24-7']=['临翔','凤庆','凤山','云','爱华','永德','德党','康','南伞','双江','勐勐','耿马','耿马','沧源','勐董'];
cpCity['24-8']=['潞西','瑞丽','梁河','遮岛','盈江','平原','陇川','章凤'];
cpCity['24-9']=['泸水六库','泸水','六库','福贡','上帕','贡山','茨开','兰坪','金顶'];
cpCity['24-10']=['香格里拉','建塘','德钦','升平','维西','保和'];
cpCity['24-11']=['大理','祥云','祥城','宾川','金牛','弥渡','弥城','永平','博南','云龙','诺邓','洱源','茈碧湖','剑川','金华','鹤庆','云鹤','漾濞','苍山西','南涧','巍山','南诏'];
cpCity['24-12']=['楚雄','双柏','妥甸','牟定','共和','南华','龙川','姚安','栋川','大姚','金碧','永仁','永定','元谋','元马','武定','狮山','禄丰','金山'];
cpCity['24-13']=['蒙自','文澜','个旧','开远','绿春','大兴','建水','临安','石屏','异龙','弥勒','弥阳','泸西','中枢','元阳','南沙','红河','迤萨','金平','金河','河口','河口','屏边','玉屏'];
cpCity['24-14']=['文山','开化','砚山','江那','西畴','西洒','麻栗坡','麻栗','马关','马白','丘北','锦屏','广南','莲城','富宁','新华'];
cpCity['24-15']=['景洪','勐海','勐海','勐腊','勐腊'];
cpCity['24']=['昆明','曲靖','玉溪','保山','昭通','丽江','思茅','临沧','德宏州','怒江州','迪庆州','大理州','楚雄州','红河州','文山州','西双版纳州'];
cpCity['25-0']=['城关','林周','甘丹曲果','当雄','当曲卡','尼木','塔荣','曲水','曲水','堆龙德庆','东嘎','达孜','德庆','墨竹工卡','工卡'];
cpCity['25-1']=['那曲','那曲','嘉黎','阿扎','比如','比如','聂荣','聂荣','安多','帕那','申扎','申扎','索','亚拉','班戈','普保','巴青','拉西','尼玛','尼玛'];
cpCity['25-2']=['昌都','城关','江达','江达','贡觉','莫洛','类乌齐','桑多','丁青','丁青','察雅','烟多','八宿','白玛','左贡','旺达','芒康','嘎托','洛隆','孜托','边坝','草卡'];
cpCity['25-3']=['林芝','八一','工布江达','工布江达','米林','米林','墨脱','墨脱','波密','扎木','察隅','竹瓦根','朗','朗'];
cpCity['25-4']=['乃东','泽当','扎囊','扎塘','贡嘎','吉雄','桑日','桑日','琼结','琼结','曲松','曲松','措美','措美','洛扎','洛扎','加查','安绕','隆子','隆子','错那','错那','浪卡子','浪卡子'];
cpCity['25-5']=['日喀则','南木林','南木林','江孜','江孜','定日','协格尔','萨迦','萨迦','拉孜','曲下','昂仁','卡嘎','谢通门','卡嘎','白朗','洛江','仁布','德吉林','康马','康马','定结','江嘎','仲巴','拉让乡','亚东','下司马','吉隆','宗嘎','聂拉木','聂拉木','萨嘎','加加','岗巴','岗巴'];
cpCity['25-6']=['噶尔','狮泉河','普兰','普兰','札达','托林','日土','日土','革吉','革吉','改则','改则','措勤','措勤','林芝人民政府驻地由林芝迁至八一'];
cpCity['25']=['拉萨','那曲地','昌都地','林芝地','山南地','日喀则地','阿里地'];
cpCity['26-0']=['莲湖','新城','碑林','灞桥','未央','雁塔','阎良','临潼','长安','蓝田','蓝关','周至','二曲','户','甘亭','高陵','鹿苑'];
cpCity['26-1']=['宝塔','延长','七里村','延川','延川','子长','瓦窑堡','安塞','真武洞','志丹','保安','吴起','吴旗','甘泉','城关','富','富城','洛川','凤栖','宜川','丹州','黄龙','石堡','黄陵','桥山'];
cpCity['26-2']=['耀州','王益','印台','宜君','城关'];
cpCity['26-3']=['临渭','华阴','韩城','华','华州','潼关','城关','大荔','城关','蒲城','城关','澄城','城关','白水','城关','合阳','城关','富平','窦村'];
cpCity['26-4']=['秦都','杨陵','渭城','兴平','三原','城关','泾阳','泾干','乾','城关','礼泉','城关','永寿','监军','彬','城关','长武','昭仁','旬邑','城关','淳化','城关','武功','普集'];
cpCity['26-5']=['渭滨','金台','陈仓','凤翔','城关','岐山','凤鸣','扶风','城关','眉','首善','陇','城关','千阳','城关','麟游','九成宫','凤','双石铺','太白','嘴头'];
cpCity['26-6']=['汉台','南郑','城关','城固','博望','洋','洋州','西乡','城关','勉','勉阳','宁强','汉源','略阳','城关','巴','泾洋','留坝','城关','佛坪','袁家庄'];
cpCity['26-7']=['榆阳','神木','神木','府谷','府谷','横山','横山','靖边','张家畔','定边','定边','绥德','名州','米脂','银州','佳','佳芦','吴堡','宋家川','清涧','宽洲','子洲','双湖峪'];
cpCity['26-8']=['汉滨','汉阴','城关','石泉','城关','宁陕','城关','紫阳','城关','岚皋','城关','平利','城关','坪','城关','旬阳','城关','白河','城关'];
cpCity['26-9']=['商州','洛南','城关','丹凤','龙驹寨','商南','城关','山阳','城关','安','永乐','柞水','乾佑'];
cpCity['26']=['西安','延安','铜川','渭南','咸阳','宝鸡','汉中','榆林','安康','商洛'];
cpCity['27-0']=['城关','七里河','西固','安宁','红古','永登','城关','皋兰','石洞','榆中','城关'];
cpCity['27-1']=['金昌','金川','永昌','城关'];
cpCity['27-2']=['白银','平川','靖远','乌兰','会宁','会师','景泰','一条山'];
cpCity['27-3']=['秦州','麦积','清水','永清','秦安','兴国','甘谷','大像山','武山','城关','张家川'];
cpCity['27-4']=['凉州','民勤','城关','古浪','古浪','天祝','华藏寺'];
cpCity['27-5']=['肃州','玉门','敦煌','金塔','金塔','安西','渊泉','肃北','党城湾','阿克塞','红柳湾'];
cpCity['27-6']=['甘州','民乐','洪水','临泽','沙河','高台','城关','山丹','清泉','肃南裕','红湾寺'];
cpCity['27-7']=['西峰','庆城','庆城','环','环城','华池','柔远','合水','西华池','正宁','山河','宁','新宁','原','城关'];
cpCity['27-8']=['崆峒','泾川','城关','灵台','中台','崇信','锦屏','华亭','东华','庄浪','水洛','静宁','城关'];
cpCity['27-9']=['安定','通渭','平襄','临洮','洮阳','漳','武阳','岷','岷阳','渭源','清源','陇西','巩昌'];
cpCity['27-10']=['武都','成','城关','宕昌','城关','康','文','城关','西和','汉源','礼','城关','两当','城关','徽','城关'];
cpCity['27-11']=['临夏','临夏','韩集','康乐','附城','永靖','刘家峡','广河','城关','和政','城关','东乡族','锁南坝','积石山','吹麻滩'];
cpCity['27-12']=['合作','临潭','城关','卓尼','柳林','舟曲','城关','迭部','电尕','玛曲','尼玛','碌曲','玛艾','夏河','拉卜楞'];
cpCity['27']=['兰州','嘉峪关','白银','天水','武威','酒泉','张掖','庆阳','平凉','定西','陇南','临夏州','甘南州'];
cpCity['28-0']=['城中','城东','城西','城北','大通','桥头','湟源','城关','湟中','鲁沙尔'];
cpCity['28-1']=['平安','平安','乐都','碾伯','民和','川口','互助','威远','化隆','巴燕','循化','积石'];
cpCity['28-2']=['海晏','三角城','祁连','八宝','刚察','沙柳河','门源','浩门'];
cpCity['28-3']=['共和','恰卜恰','同德','尕巴松多','贵德','河阴','兴海','子科滩','贵南','茫曲'];
cpCity['28-4']=['同仁','隆务','尖扎','马克唐','泽库','泽曲','河南','优干宁'];
cpCity['28-5']=['玛沁','大武','班玛','赛来塘','甘德','柯曲','达日','吉迈','久治','智青松多','玛多','黄河乡'];
cpCity['28-6']=['玉树','结古','杂多','萨呼腾','称多','称文','治多','加吉博洛','囊谦','香达','曲麻莱','约改'];
cpCity['28-7']=['德令哈','格尔木','乌兰','希里沟','都兰','察汗乌苏','天峻','新源'];
cpCity['28']=['西宁','海东地','海北州','海南州','黄南州','果洛州','玉树州','海西州'];
cpCity['29-0']=['兴庆','金凤','西夏','灵武','永宁','杨和','贺兰','习岗'];
cpCity['29-1']=['大武口','惠农','平罗','城关'];
cpCity['29-2']=['利通','青铜峡','盐池','花马池','同心','豫海'];
cpCity['29-3']=['原州','西吉','吉强','隆德','城关','泾源','香水','彭阳','白阳'];
cpCity['29-4']=['沙坡头','中宁','海原'];
cpCity['29']=['银川','石嘴山','吴忠','固原','中卫'];
cpCity['30-0']=['天山','沙依巴克','新','水磨沟','头屯河','达坂城','东山','乌鲁木齐','乌鲁木齐水磨沟'];
cpCity['30-1']=['克拉玛依','独山子','白碱滩','乌尔禾'];
cpCity['30-2']=['石河子','阿拉尔','图木舒克','五家渠'];
cpCity['30-3']=['喀什','疏附','托克扎克','疏勒','英吉沙','泽普','莎车','叶城','喀格勒克','麦盖提','岳普湖','伽师','巴仁','巴楚','塔什库尔干塔吉克','塔什库尔干'];
cpCity['30-4']=['阿克苏','温宿','温宿','库车','库车','沙雅','沙雅','新和','新和','拜城','拜城','乌什','乌什','阿瓦提','阿瓦提','柯坪','柯坪'];
cpCity['30-5']=['和田','和田','墨玉','喀拉喀什','皮山','固玛','洛浦','洛浦','策勒','策勒','于田','木尕拉','民丰','尼雅'];
cpCity['30-6']=['吐鲁番','鄯善','鄯善','托克逊','托克逊'];
cpCity['30-7']=['哈密','伊吾','伊吾','巴里坤哈萨克','巴里坤'];
cpCity['30-8']=['阿图什','阿克陶','阿合奇','乌恰'];
cpCity['30-9']=['博乐','精河','温泉','博格达尔'];
cpCity['30-10']=['昌吉','阜康','米泉','呼图壁','玛纳斯','奇台','吉木萨尔','木垒哈萨克','木垒'];
cpCity['30-11']=['库尔勒','轮台','尉犁','若羌','且末','和静','和硕','特吾里克','博湖','焉耆'];
cpCity['30-12']=['伊宁','奎屯','伊宁','吉里于孜','霍城','水定','巩留','巩留','新源','新源','昭苏','昭苏','特克斯','尼勒克','察布查尔锡伯','察布查尔'];
cpCity['30-13']=['塔城','乌苏','额敏','沙湾','三道河子','托里','裕民','哈拉布拉','和布克赛尔蒙古','和布克赛尔'];
cpCity['30-14']=['阿勒泰','布尔津','富蕴','库额尔齐斯','福海','哈巴河','青河','吉木乃'];
cpCity['30']=['乌鲁木齐','克拉玛依','直辖级行政单位','喀什地','阿克苏地','和田地','吐鲁番地','哈密地','克孜勒苏柯州','博尔塔拉州','昌吉州','巴音郭楞州','伊犁州','塔城地','阿勒泰地'];