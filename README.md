# file-server

This is a simple - AND VERY INSECURE - fileserver.  

Do not, under any circumstance, provide anyone other than yourself access to this script.  

🚨 **Bad things will happen.** 🚨

## Usage

1. Run the server in one terminal session with `node server.js`
2. Fetch a file by doing `node client.js [REMOTEFILENAME] [LOCALFILENAME]`, 

### Example

`node client.js /etc/hosts hostsbackup.txt`  

This will create a file in the local folder called `hostsbackup.txt` with the content of the server's `/etc/hosts` file
