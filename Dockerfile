FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3003
CMD ["npm", "start"]

# docker build . -t prashanthshivanna/speech:30112024
# docker run -p 3003:3003 prashanthshivanna/speech:30112024
# docker push prashanthshivanna/speech:30112024
# docker run -d --name speech -e "VIRTUAL_HOST=speech.jssish.com" -e "VIRTUAL_PORT=3003" -e "LETSENCRYPT_HOST=speech.jssish.com" -p 3003:3003 --restart unless-stopped prashanthshivanna/speech:30112024

