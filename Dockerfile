FROM vercel/next:latest

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]



# 도커 이미지 만들어서 허브에 올리기
# - 기본 이미지 nginx, centos, ubuntu, apache 등으로 컨테이너 생성 후 dockerfile을 만들어서 이미지 커스터마이징 하기


# 원래 회사에서 하던 방식으로 nginx 같은 기본 이미지를 다운 받아서 해당 서버 디렉토리 내에 nextjs 프로젝트 생성해서 해도됨.

# 진천군 광혜원면 장기길70 101동 1104호 양우내안애