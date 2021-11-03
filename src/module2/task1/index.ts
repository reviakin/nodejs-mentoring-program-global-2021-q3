import { Transform } from "stream";

process.stdin
  .pipe(
    new Transform({
      transform(chunk, _, done) {
        done(null, chunk.toString().split("").reverse().join("").slice(1));
      },
    })
  )
  .pipe(process.stdout);
