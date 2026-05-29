deploy:
	rm -rf public
	hugo --minify
	rsync -avz --delete -e "ssh -p 2009" public/ root@"$$GATE_IP":/var/www/mvp2prod.ru/