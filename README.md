<p align="center">
  <a href="https://photobooth.diveindeep.space">
    <img src="public/static/logo512.png" width="80" height="80" alt="logo">
  </a>
</p>
<h1 align="center">PHOTOBOOTH</h1>


인O네컷, 포토O즘 웹페이지 버전<br/>
노트북의 웹캠 / 모바일의 전면카메라로 이용할 수 있습니다.


## Requirements

- Chrome Browser를 권장합니다.
- Desktop을 권장합니다.

## Installation

### Client

```javascript
git clone https://github.com/diveindeep-dev/photobooth.git
cd photobooth
yarn install
yarn dev
```


## 🔧 Skills or Tools
- Nextjs
- Typescript
- React
- ES2015+
- tailwindcss
- Vercel
- Git


## 🎯 Features
1. Nextjs + Typescript + tailwindcss 조합으로 만들기

2. 컴포넌트를 이미지로 변환
   - react-webcam 라이브러리를 이용하여 웹캠 접근
   - screenshot 기능으로 사진찍는 기능
   - html2canvas 라이브러리를 사용하여 컴포넌트를 이미지로 변환
   - file-saver 라이브러리를 사용하여 디바이스에 이미지 저장

3. 여러가지 프레임
   - 비밀 코드를 입력하면 해당하는 프레임이 노출
   - 다양한 비율의 프레임
   - 원하는 프레임에 원하는 사진을 고를 수 있도록 선택 기능

4. 반응형 웹
   - 웹페이지 및 모바일에 대응하는 레이아웃 구성



## 📌 Thinng to Do
- [x] 반응형 웹
- [ ] 모바일 디바이스에서의 카메라 비율 오류

## 💫 Deploy
Vercel로 배포


