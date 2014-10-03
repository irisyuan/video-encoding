import csv

ifile  = open('throttle-test.csv', "rb")
ofile = open('filtered-throttle.csv', "wb")
writer = csv.writer(ofile, delimiter='\t', quotechar='"', quoting=csv.QUOTE_ALL)
reader = csv.reader(ifile)

rownum = 0

for row in reader:
    if rownum == 0:
        header = row
        writer.writerow(row)
    else:
        colnum = 0
        for col in row:
        	# only want url, status, protocol, duration, request/ response duration, latency, speed, response speed...
        	if 'http://www.screencast.com' in col:
	            writer.writerow(row)
	            colnum += 1
            
    rownum += 1

ifile.close()
ofile.close()