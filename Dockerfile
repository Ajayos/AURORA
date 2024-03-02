# Use the base image
FROM ajayosak/aurora:latest

# Set the working directory
WORKDIR /AURORA

# Install dependencies
RUN npm i -f

# Run npm init
RUN node cmd.js init
