FROM quay.io/Ajay_o_s/keerthana:latest
RUN git clone https://github.com/Ajayos/aurora  /root/aurora/
WORKDIR /root/aurora/
CMD ["node", "index.js"]