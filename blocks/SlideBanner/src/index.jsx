import React, { useState } from 'react';
import './index.scss';

export default function SlideBanner() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onMouseEnter = (event) => {
    const { index } = event.currentTarget.dataset;
    const newSelectedIndex = parseInt(index, 10);
    if (!isNaN(newSelectedIndex)) {
      setSelectedIndex(newSelectedIndex);
    }
  };

  return (
    <div className="hy-friends-list">
      <a
        href="#"
        className={`hy-friends-item ${selectedIndex === 0 ? 'selected' : ''}`}
        data-index="0"
        onMouseEnter={onMouseEnter}
      >
        <img
          className="hy-friends-img"
          src={require('./images/CdqiMTPofpGZyLcJkDHX.jpg')}
          alt=""
        />
        <h4>南都物业</h4>
        <span>适用场景：物业缴费</span>
        <p>
          南都物业公司在接入支付宝在线物业缴费渠道之后，线上线下推广支付宝在线缴费上线一个月后，缴费日均超过200笔，大幅提升了缴费效率
        </p>
        <img
          className="hy-friends-qr"
          src={require('./images/MhShJeukuJNkenGytSiq.svg')}
          alt=""
        />
      </a>

      <a
        href="#"
        className={`hy-friends-item ${selectedIndex === 1 ? 'selected' : ''}`}
        data-index="1"
        onMouseEnter={onMouseEnter}
      >
        <img
          className="hy-friends-img"
          src={require('./images/ZWoRmVSYImddLaRYyQog.jpg')}
          alt=""
        />
        <h4>金地物业</h4>
        <span>适用场景：小区主页，物业缴费</span>
        <p>
          金地物业借助生活号打造智慧社区，整合蚂蚁金服的资源，引入各项服务与资源，从而增加收入，同时积累大批关注用户，实现了良性循环
        </p>
        <img
          className="hy-friends-qr"
          src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
          alt=""
        />
      </a>

      <a
        href="#"
        className={`hy-friends-item ${selectedIndex === 2 ? 'selected' : ''}`}
        data-index="2"
        onMouseEnter={onMouseEnter}
      >
        <img
          className="hy-friends-img"
          src={require('./images/MHiDpDgUNShsjTCQXKKd.jpg')}
          alt=""
        />
        <h4>宋都阳光</h4>
        <span>适用场景：智能门禁</span>
        <p>
          基于年轻人“手机不离身”的特点，安装智能门禁，外部人员出入记录线上化，提升访客通行速度，减少手工登记环节，提升了小区的整体安全性，规范管理流程，实现了物业与业主的共赢
        </p>
        <img
          className="hy-friends-qr"
          src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
          alt=""
        />
      </a>

      <a
        href="#"
        className={`hy-friends-item ${selectedIndex === 3 ? 'selected' : ''}`}
        data-index="3"
        onMouseEnter={onMouseEnter}
      >
        <img
          className="hy-friends-img"
          src={require('./images/JQBQcVBtAiyTGINHQNzh.jpg')}
          alt=""
        />
        <h4>融侨物业</h4>
        <span>适用场景：物业缴费、物业理财</span>
        <p>
          接入支付宝的物业缴费和余利宝等功能，物业费自动转入余利宝，上线2个月，余利宝的日均余额超过200万元，按照7日年化4%的收益，年度收益达到8万元
        </p>
        <img
          className="hy-friends-qr"
          src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
          alt=""
        />
      </a>
    </div>
  );
}
