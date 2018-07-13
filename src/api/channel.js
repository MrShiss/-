import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'

// 获取电视剧
export function getRecommend() {
  const url = 'http://mobile.video.qq.com/fcgi-bin/getjimudata'

  const data = Object.assign({}, commonParams, {
    type: 1,
    otype: 'json',
    timeStamp: 1520817374734,
    platform: 103,
    version: 2,
    ztid: 100113,
    leafids: '20171130035899+20171023037321+20150905000302',
    callback: 'jsonp2'
  })

  return jsonp(url, data, options)
}

export function getYuGao () {
  const url = 'http://mobile.video.qq.com/fcgi-bin/getjimudata'

  const data = Object.assign({}, commonParams, {
    type: 1,
    otype: 'json',
    timeStamp: 1521084087873,
    platform: 103,
    version: 2,
    ztid: 100113,
    leafids: '20131219009771+20150428044993+20131122016740',
    callback: 'jsonp3'
  })

  return jsonp(url, data, options)
}

export function getInte () {
  const url = 'http://mobile.video.qq.com/fcgi-bin/getjimudata'

  const data = Object.assign({}, commonParams, {
    type: 1,
    otype: 'json',
    timeStamp: 1521084087873,
    platform: 103,
    version: 2,
    ztid: 100113,
    leafids: '20150903012519+20170127006198+20170417029092',
    callback: 'jsonp4'
  })

  return jsonp(url, data, options)
}

export function getVideo (videoId) {
  const url = 'https://node.video.qq.com/x/vlikecgi/related_rec'
  const data = Object.assign({}, commonParams, {
    vid: videoId,
    rec_num: 15,
    no_login_id: '28437e25e996a'
  })

  return jsonp(url, data, options)
}
// ****电视****
export function getBenefit () {
  const url = 'https://activity.video.qq.com/fcgi-bin/activity_interface'
  const data = Object.assign({}, commonParams, {
    i_type: 111,
    otype: 'json',
    platform: 8,
    callback: 'jsonp1'
  })

  return jsonp(url, data, options)
}

export function getComment (id) {
  const url = 'https://coral.qq.com/article/2521015281/firstpage/comment/timeline'
  const data = Object.assign({}, commonParams, {
    commentid: id,
    reqnum: 3,
    hotreqnum: 3,
    source: 9,
    callback: 'jsonp3'
  })

  return jsonp(url, data, options)
}

export function getOther (id) {
  const url = 'https://like.video.qq.com/fcgi-bin/like'
  const data = Object.assign({}, commonParams, {
    id: id,
    ex: 0,
    playright: 7,
    uin: 0,
    size: 15,
    min_size: 4,
    top_size: 21,
    otype: 'json',
    appver: '14.2.13.11.06',
    defn: 'msg',
    msgtype: 92,
    tablist: 1,
    _: 0.5573049411584645,
    callback: 'jsonp4'
  })

  return jsonp(url, data, options)
}

//  娱乐
export function getYule () {
  const url = 'http://mobile.video.qq.com/fcgi-bin/getjimudata'
  const data = Object.assign({}, commonParams, {
    type: 1,
    otype: 'json',
    timeStamp: 1521170914831,
    platform: 103,
    version: 2,
    ztid: 100111,
    leafids: '20160427023148+20160427038619+20160427002954',
    callback: 'jsonp2'
  })

  return jsonp(url, data, options)
}

export function getAidou () {
  const url = 'http://mobile.video.qq.com/fcgi-bin/getjimudata'
  const data = Object.assign({}, commonParams, {
    type: 1,
    otype: 'json',
    timeStamp: 1521171567307,
    platform: 103,
    version: 2,
    ztid: 100111,
    leafids: '20160427025030+20160427037484+20160427002372',
    callback: 'jsonp3'
  })

  return jsonp(url, data, options)
}

export function getPro () {
  const url = 'http://mobile.video.qq.com/fcgi-bin/getjimudata'
  const data = Object.assign({}, commonParams, {
    type: 1,
    otype: 'json',
    timeStamp: 1521181652015,
    platform: 103,
    version: 2,
    ztid: 100111,
    leafids: '20150617047215+20170214024168+20151112058070',
    callback: 'jsonp4'
  })

  return jsonp(url, data, options)
}

export function getZuo () {
  const url = 'http://mobile.video.qq.com/fcgi-bin/getjimudata'
  const data = Object.assign({}, commonParams, {
    type: 1,
    otype: 'json',
    timeStamp: 1521181652015,
    platform: 103,
    version: 2,
    ztid: 100111,
    leafids: '20160913038704+20140807064082+20150423050138',
    callback: 'jsonp5'
  })

  return jsonp(url, data, options)
}

export function getKe () {
  const url = 'http://mobile.video.qq.com/fcgi-bin/getjimudata'
  const data = Object.assign({}, commonParams, {
    type: 1,
    otype: 'json',
    timeStamp: 1521181652015,
    platform: 103,
    version: 2,
    ztid: 100111,
    leafids: '20160503048714+20150702026438',
    callback: 'jsonp6'
  })

  return jsonp(url, data, options)
}

//  搜索
export function getHotkey () {
  const url = 'http://data.video.qq.com/fcgi-bin/dataout'
  const data = Object.assign({}, commonParams, {
    auto_id: 938,
    otype: 'json',
    _: 1523438696259,
    callback: 'jsonp1'
  })

  return jsonp(url, data, options)
}

// ****输入搜索****
export function search (query) {
  const url = 'http://s.video.qq.com/smt_wap'
  const data = Object.assign({}, commonParams, {
    plat: 2,
    ver: 3,
    num: 10,
    otype: 'json',
    query: query,
    _: 1523499696840
  })

  return jsonp(url, data, options)
}