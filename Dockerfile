FROM creepinson/alpine-pnpm as build

WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm run build

FROM nginx:alpine

# Copy the build output to the root of the container
COPY --from=build /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
