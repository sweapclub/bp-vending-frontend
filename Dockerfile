# base image
FROM node:16

ENV REACT_APP_BASE_API_URL=http://localhost:8000
ENV API_VERSION=/api/v1
# set working directory
# RUN mkdir /usr/src/app
# WORKDIR /usr/src/app

# # add `/usr/src/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json /usr/src/app/package.json
# RUN npm install
# RUN npm install react-scripts -g

# # start app
# CMD ["npm", "start"]

WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
RUN npm install 
RUN npm install react-scripts -g

# add app
COPY . ./

# start app
CMD ["npm", "start"]