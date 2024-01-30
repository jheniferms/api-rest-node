import { server } from "./server/server";

server.listen(process.env.PORT || 3333, () => {

    console.log(`it's running on the port ${process.env.PORT || 3333}`);
}
);
