yarn pbjs -t static-module -w commonjs -o ./src/Proto/index.js ./src/Proto/Proto.proto;
yarn pbts -o ./src/Proto/index.d.ts ./src/Proto/index.js;

#protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_opt=env=node,useOptionals=true,forceLong=long --ts_proto_out=. ./src/Binary/WAMessage.proto;