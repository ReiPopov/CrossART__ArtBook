from PIL import Image

# count = 355
# recount = 357
# chapter = 12

# while count != 358:
# 	img = Image.open(f'Chapter-{chapter}/Page-{count}.jpg')
# 	img.save(f'Chapter-{chapter}/Page-{recount}.webp', 'webp')
# 	recount += 1
# 	count += 1
# file = open('LogFile-CrossArtWorldMap-404(jpg).txt', 'w')
# while count != 77:
	# file.write(f'----{count}----\n')
	# print(f'----{count}----')
	# try:
	#     img = Image.open(f'{count}/КПК.jpg')
	#     img.save(f'{count}/KPK.webp', 'webp')
	#     print(f'Файл готов {count}/KPK.webp')
	#     file.write(f'Файл готов {count}/KPK.webp\n')
	# except FileNotFoundError:
	#     print(f'{count}/KPK.jpg - 404')
	#     file.write(f'{count}/KPK.jpg - 404\n')
	# try:
	    # img = Image.open(f'{count}/prew.png')
	    # img.save(f'{count}/prev.webp', 'webp')
	    # print(f'Файл готов {count}/prev.webp')
	    # file.write(f'Файл готов {count}/prev.webp\n')
	# except FileNotFoundError:
	    # print(f'{count}/prev.jpg - 404')
	    # file.write(f'{count}/prev.jpg - 404\n')
	# try:
	#     img = Image.open(f'{count}/photo1.jpg')
	#     img.save(f'{count}/photo1.webp', 'webp')
	#     print(f'Файл готов {count}/photo1.webp')
	#     file.write(f'Файл готов {count}/photo1.webp\n')
	# except FileNotFoundError:
	#     print(f'{count}/photo1.jpg - 404')
	#     file.write(f'{count}/photo1.jpg - 404\n')
	# try:
	#     img = Image.open(f'{count}/photo2.jpg')
	#     img.save(f'{count}/photo2.webp', 'webp')
	#     print(f'Файл готов {count}/photo2.webp')
	#     file.write(f'Файл готов {count}/photo2.webp\n')
	# except FileNotFoundError:
	#     print(f'{count}/photo2.jpg - 404')
	#     file.write(f'{count}/photo2.jpg - 404\n')
	# try:
	#     img = Image.open(f'{count}/miniMap.jpg')
	#     img.save(f'{count}/miniMap.webp', 'webp')
	#     print(f'Файл готов {count}/miniMap.webp')
	#     file.write(f'Файл готов {count}/miniMap.webp\n')
	# except FileNotFoundError:
	#     print(f'{count}/miniMap.jpg - 404')
	#     file.write(f'{count}/miniMap.jpg - 404\n')

	# count += 1

# file.close()



img = Image.open('Page-3.jpg')
img.save('Page-3.webp', 'webp')

# img = Image.open('prev.jpg')
# img.save('prev.webp', 'webp')

# img = Image.open('photo1.jpg')
# img.save('photo1.webp', 'webp')

# img = Image.open('photo2.jpg')
# img.save('photo2.webp', 'webp')

# img = Image.open('miniMap.webp')
# img.save('miniMap.webp', 'webp')