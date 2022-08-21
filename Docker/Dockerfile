FROM quay.io/Ajay_o_s/keerthana:latest
RUN git clone -b connection https://github.com/Ajay-o-s/Keerthana  /root/keerthana/
RUN git clone -b web https://github.com/Ajay-o-s/Keerthana  /root/keerthana/public
WORKDIR /root/keerthana/
CMD ["node", "index.js"]