let Mastodon = function (params) {
	this.INSTANCE = params.instance;
	this.UID = params.userId;
	this.LIMIT = params.limit || 20;
	this.CONTAINER = document.getElementById('mastodon-toots');
	this.getToots();
}

Mastodon.prototype.getToots = function () {
	let url = `${this.INSTANCE}/api/v1/accounts/${this.UID}/statuses?limit=${this.LIMIT}`
	fetch(url, { method: 'get' })
	.then(response => response.json())
	.then(jsonData => {
		this.CONTAINER.innerHTML = '';
		jsonData.forEach(status => {
			if ((status.visibility == 'public') || (status.visibility == 'unlisted')) {
				let data = {};
				if (status.reblog) {
					data = {
						date: this.formatDate(status.reblog.created_at),
						attachments: status.reblog.media_attachments,
						url: status.reblog.url,
						ac_avatar: status.reblog.account.avatar,
						ac_display_name: status.reblog.account.display_name,
						ac_url: status.reblog.account.url,
						ac_username: status.reblog.account.username,
					};
				} else {
					data = {
						date: this.formatDate(status.created_at),
						attachments: status.media_attachments,
						url: status.url,
						ac_avatar: status.account.avatar,
						ac_display_name: status.account.display_name,
						ac_url: status.account.url,
						ac_username: status.account.username,
					};
				}
				if (status.spoiler_text) {
					data.content = status_.spoiler_text
				} else if (status.reblog && status.reblog.content) {
					data.content = status.reblog.content
				} else {
					data.content = status.content
				}
				this.CONTAINER.insertAdjacentHTML('beforeend', this.formatToot(data));
			}
		});
	})
	.catch(err => {
		this.CONTAINER.innerHTML = `Request Failed:<br/>${err}`;
	});
};

Mastodon.prototype.formatToot = function (data) {
	let mediaContent = '';
	if (Array.isArray(data.attachments) && (data.attachments.length > 0)) {
		mediaContent += '<div class="flex m-4">'
		data.attachments.forEach(a => {
			if (a.type == 'image') {
				mediaContent += `
				<div class="flex-none mr-4">
					<a data-fancybox="galery" data-caption="${a.description}" href="${a.url}">
						<img class="rounded" width="200" src="${a.preview_url}" />
					</a>
				</div>`
			}
		})
		mediaContent += '</div>'
	}
	return `
		<div class="flex items-start p-2 -ml-2" data-location="${data.url}">
		<a href="${data.ac_url}" rel="noopener noreferrer" target="_blank"><img src="${data.ac_avatar}" class="w-12 h-12 rounded mr-3"></a>
		<div class="flex-1 overflow-hidden">
			<div class="mb-1">
			<div class="flex justify-between">
				<div class="flex items-center">
				<a href="${data.ac_url}" rel="noopener noreferrer" target="_blank"><span class="font-bold">${data.ac_display_name}</span></a>
				<span class="text-grey-200 text-sm ml-2">${data.date}</span>
				</div>
			</div>
			</div>
			<div class="text-black leading-normal">
				${data.content}
			</div>
			${mediaContent}
		</div>
		</div>`
}

Mastodon.prototype.formatDate = function (created_at) {
	return new Date(Date.parse(created_at)).toLocaleString()
}
