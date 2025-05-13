# Astro site with docker

## Deployment Instructions

To deploy this Astro site on a VPS, follow these steps:

1. **Choose a VPS Provider**: You can select any VPS provider of your choice.

3. **Install Docker**: Install docker on your VPS
4. **Update nginx.conf**: Before deployment you need to update nginx.conf, use your domain
5. **Deploy the Astro Site**:
   - Use this template
   - Navigate to the directory containing your `docker-compose.yml`.
   - Run the Docker container:
     ```bash
     docker-compose up -d --build
     ```

5. **Access Your Site**:
   - Open a web browser and navigate to your VPS's IP address. You should see your Astro site running.

That's it! Your Astro site should now be live and accessible from the internet. Make sure to secure your VPS and Docker installation according to best practices.

