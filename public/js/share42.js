var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($){
	$(function(){
		$('ul.social').each(function(idx){
			var el=$(this),
					u=el.attr('data-url'),
					t=el.attr('data-title'),
					i=el.attr('data-image'),
					d=el.attr('data-description'),
					f=el.attr('data-path'),
					z=el.attr("data-zero-counter");

			if(!u)	u=location.href;
			if(!z)	z=0;
			if(!f)	{
				function path(name){
					var sc=document.getElementsByTagName('script'),sr=new RegExp('^(.*/|)('+name+')([#?]|$)');
					for(var i=0,scL=sc.length;i<scL;i++){
						var m=String(sc[i].src).match(sr);
						if(m){
							if(m[1].match(/^((https?|file)\:\/{2,}|\w:[\/\\])/))return m[1];
								if(m[1].indexOf("/")==0)return m[1];
								b=document.getElementsByTagName('base');
								if(b[0]&&b[0].href)return b[0].href+m[1];
								else return document.location.pathname.match(/(.*[\/\\])/)[0]+m[1];
							}
						}
						return null;
				}
				f=path('share42.js');
			}

			if(!t)t=document.title;if(!d){
				var meta=$('meta[name="description"]').attr('content');
				if(meta!==undefined)d=meta;
				else d='';
			}

			u=encodeURIComponent(u);
			t=encodeURIComponent(t);
			t=t.replace(/\'/g,'%27');
			i=encodeURIComponent(i);
			d=encodeURIComponent(d);
			d=d.replace(/\'/g,'%27');

			var fbQuery='u='+u;
			if(i!='null'&&i!='')fbQuery='s=100&p[url]='+u+'&p[title]='+t+'&p[summary]='+d+'&p[images][0]='+i;

			var vkImage='';
			if(i!='null'&&i!='')vkImage='&image='+i;
			
			var s=new Array(
			'"#" data-count="fb" onclick="window.open(\'http://www.facebook.com/sharer.php?'+fbQuery+'\', \'_blank\', \'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=550, height=440, toolbar=0, status=0\');return false" title="Поделиться в Facebook"');

var fa = new Array ('fa-facebook');

var l='';
for(j=0;j<s.length;j++)l+='<li><a href='+s[j]+' target="_blank"><i class="fa '+fa[j]+'"></i></a></li>';

el.append(l+'');})})})(jQuery);

}