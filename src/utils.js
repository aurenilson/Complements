export class Utils {
	constructor() {
		return this;
	}
	system() {
		return {
			async sleep(seconds) {
				return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
			}
		};
	}
	dates() {
		return {};
	}
	DOM() {
		const self = this;
		return {
			create(type = "div", params = { id: "id-el", class: "class-el" }, value = "", state = "body") {
				if (!self.validates().isTagHTML(type) || !self.validates().isObject(params) || !["body", "head"].includes(state)) return;
				if (params.id) self.DOM().remove(params.id);
				const element = document.createElement(type);
				Object.entries(params).forEach((item) => {
					element.setAttribute(item[0], item[1]);
				});
				element.innerHTML = value;
				document[state].append(element);
			},
			remove(value) {
				return self.DOM().get(value) ? self.DOM().get(value).remove() : null;
			},
			get(value) {
				return self.validates().isString(value) && value[0] == "." ? self.DOM().getAll(value)[0] : document.getElementById(value);
			},
			getAll(value = "") {
				console.log(value);
				if (!self.validates().isString(value) || value.indexOf(".") == -1) return;
				return document.getElementsByClassName(value.slice(1));
			}
		};
	}
	objects() {
		const self = this;
		return {
			removeDuplicateArray(value = []) {
				if (!self.validates().isArray(value)) return;
				return [...new Set(value)];
			},
			removeDuplicateArrayObject(value = [], key = "id") {
				if (!self.validates().isArray(value)) return;
				const mapObject = new Map(value.map((u) => [u[key], u]));
				return [...mapObject.values()];
			},
			clone(value) {
				if (!(self.validates().isObject(value) || self.validates().isArray(value))) return;
				return Object.assign({}, value);
			}
		};
	}
	masks() {
		const self = this;
		return {
			money(value) {
				value = self.strings().removeCaracters(value);
				if (!self.validates().isString(value)) return false;
				if (!window.Intl) return "R$ " + parseFloat(value).toFixed(2);
				var formatter = new Intl.NumberFormat("pt-BR", {
					style: "currency",
					currency: "BRL"
				});
				return formatter.format(value).replace(/\u00a0/g, " ");
			},

			credCard(value) {
				if (!self.validates().isString(value)) return false;
				const response = self
					.strings()
					.removeCaracters(value)
					.match(/.{1,4}/g);
				return response ? response.join(" ").substring(0, 19) : null;
			},

			zipCode(value) {
				if (!self.validates().isString(value)) return false;
				const response = self
					.strings()
					.removeCaracters(value)
					.match(/.{1,5}/g);
				return response ? response.join(" ").substring(0, 9) : null;
			},

			birthDate(value) {
				if (!self.validates().isString(value)) return false;
				let noformt = self.strings().removeCaracters(value).substring(0, 8);

				let arg1 = noformt.substring(0, 2).replace(/(\d{2})/, function (regex, argumento1) {
					return `${argumento1}`;
				});
				let arg2 = noformt
					.slice(2)
					.substring(0, 2)
					.replace(/(\d{2})/, function (regex, argumento1) {
						return `${argumento1}`;
					});
				let arg3 = noformt
					.slice(4)
					.substring(0, 4)
					.replace(/(\d{4})/, function (regex, argumento1) {
						return `${argumento1}`;
					});

				return `${arg1}${arg2 ? "/" + arg2 : ""}${arg3 ? "/" + arg3 : ""}`;
			},

			cpfOrCnpj(value) {
				if (!self.validates().isString(value)) return false;
				let noformt = self.strings().removeCaracters(value);

				if (noformt.length > 11) {
					// CNPJ
					return self.masks().cnpj(value);
				} else {
					// CPF
					return self.masks().cpf(value);
				}
			},

			cnpj(value) {
				let noformt = self.strings().removeCaracters(value).substring(0, 15);
				let arg1 = noformt.substring(0, 2).replace(/(\d{2})/, function (regex, argumento1) {
					return `${argumento1}`;
				});
				let arg2 = noformt
					.slice(2)
					.substring(0, 3)
					.replace(/(\d{3})/, function (regex, argumento1) {
						return `${argumento1}`;
					});
				let arg3 = noformt
					.slice(5)
					.substring(0, 3)
					.replace(/(\d{3})/, function (regex, argumento1) {
						return `${argumento1}`;
					});
				let arg4 = noformt
					.slice(8)
					.substring(0, 4)
					.replace(/(\d{4})/, function (regex, argumento1) {
						return `${argumento1}`;
					});

				let arg5 = noformt
					.slice(12)
					.substring(0, 2)
					.replace(/(\d{2})/, function (regex, argumento1) {
						return `${argumento1}`;
					});

				return `${arg1}${arg2 ? "." + arg2 : ""}${arg3 ? "." + arg3 : ""}${arg4 ? "/" + arg4 : ""}${arg5 ? "-" + arg5 : ""}`;
			},

			cpf(value) {
				let noformt = self.strings().removeCaracters(value).substring(0, 11);
				let arg1 = noformt.substring(0, 3).replace(/(\d{3})/, function (regex, argumento1) {
					return `${argumento1}`;
				});
				let arg2 = noformt
					.slice(3)
					.substring(0, 3)
					.replace(/(\d{3})/, function (regex, argumento1) {
						return `${argumento1}`;
					});
				let arg3 = noformt
					.slice(6)
					.substring(0, 3)
					.replace(/(\d{3})/, function (regex, argumento1) {
						return `${argumento1}`;
					});
				let arg4 = noformt
					.slice(9)
					.substring(0, 2)
					.replace(/(\d{2})/, function (regex, argumento1) {
						return `${argumento1}`;
					});

				return `${arg1}${arg2 ? "." + arg2 : ""}${arg3 ? "." + arg3 : ""}${arg4 ? "-" + arg4 : ""}`;
			}
		};
	}
	validates() {
		const self = this;
		return {
			isNumber(value) {
				return value && typeof value === "number" && isFinite(value);
			},
			isString(value) {
				return value && (typeof value === "string" || value instanceof String);
			},
			isPromise(value) {
				return value && value instanceof Promise;
			},
			isObject(value) {
				return value && value instanceof Object && !Array.isArray(value);
			},
			isArray(value) {
				return value && Array.isArray(value);
			},
			isEmail(value) {
				if (!self.validates().isString(value)) return false;
				return /\S+@\S+\.\S+/.test(value);
			},
			hasLastname(value) {
				if (!self.validates().isString(value)) return false;
				return /\S+ \S+/.test(value.trim());
			},
			hasObject(value, object) {
				if (!self.validates().isString(value) || !self.validates().isObject(object)) return false;
				return Object.prototype.hasOwnProperty.call(object, value);
			},
			isTagHTML(value) {
				return [
					"a",
					"abbr",
					"address",
					"area",
					"article",
					"aside",
					"audio",
					"b",
					"base",
					"bdi",
					"bdo",
					"blockquote",
					"body",
					"br",
					"button",
					"canvas",
					"caption",
					"cite",
					"code",
					"col",
					"colgroup",
					"data",
					"datalist",
					"dd",
					"del",
					"details",
					"dfn",
					"dialog",
					"div",
					"dl",
					"dt",
					"em",
					"embed",
					"fieldset",
					"figcaption",
					"figure",
					"footer",
					"form",
					"h1",
					"h2",
					"h3",
					"h4",
					"h5",
					"h6",
					"head",
					"header",
					"hr",
					"html",
					"i",
					"iframe",
					"img",
					"input",
					"ins",
					"kbd",
					"label",
					"legend",
					"li",
					"link",
					"main",
					"map",
					"mark",
					"meta",
					"meter",
					"nav",
					"noscript",
					"object",
					"ol",
					"optgroup",
					"option",
					"output",
					"p",
					"param",
					"picture",
					"pre",
					"progress",
					"q",
					"rp",
					"rt",
					"ruby",
					"s",
					"samp",
					"script",
					"section",
					"select",
					"small",
					"source",
					"span",
					"strong",
					"style",
					"sub",
					"summary",
					"sup",
					"svg",
					"table",
					"tbody",
					"td",
					"template",
					"textarea",
					"tfoot",
					"th",
					"thead",
					"time",
					"title",
					"tr",
					"track",
					"u",
					"ul",
					"var",
					"video",
					"wbr"
				].includes(value);
			}
		};
	}
	links() {
		const self = this;
		return {
			generate(value) {
				if (!self.validates().isString(value)) return;
				return value ? self.strings().removeSpecialCaracters(value.replaceAll("-", " ").replaceAll("  ", " ").replaceAll(" ", "-").toLowerCase().trim()) : "";
			},
			breadCrumb(value) {
				if (!self.validates().isArray(value)) return;
				const breadcrumb_ = [];
				value.forEach((item) => {
					if (item.url && item.name) {
						breadcrumb_.push(`<a href="${item.url}">${item.name}</a>`);
					}
				});
				if (!breadcrumb_.length) return;
				return (
					'<section style="display: flex; align-items: center; gap: 5px; font-size: 15px; text-transform: capitalize;">' +
					breadcrumb_.join(
						' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="width: 20px"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg> '
					) +
					"</section>"
				);
			},
			searchParams(param, decode = false, url = window.location.href) {
				if (url.indexOf("?") == -1) return;
				return (decode ? new URL(decodeURI(url)) : new URL(url)).searchParams.get(param);
			},
			serialize(value, prefix = false) {
				if (!self.validates().isObject(value)) return;
				return Object.keys(value).length
					? (prefix ? "?" : "") +
							Object.keys(value)
								.map((item) => {
									return encodeURIComponent(item) + "=" + encodeURIComponent(value[item]);
								})
								.join("&")
					: null;
			}
		};
	}
	strings() {
		const self = this;
		return {
			captalizeWord: (value) => {
				if (!self.validates().isString(value)) return;
				return value ? (value.charAt(0).toUpperCase() + value.slice(1)).trim() : "";
			},
			captalizePhrase: (value) => {
				if (!self.validates().isString(value)) return;
				return value
					? value
							.trim()
							.toLowerCase()
							.split(" ")
							.map((item) => (item.length > 2 ? item[0].toUpperCase() + item.substring(1) : item))
							.join(" ")
					: "";
			},
			upperCase: (value) => {
				if (!self.validates().isString(value)) return;
				return value ? value.toUpperCase() : "";
			},
			lowerCase: (value) => {
				if (!self.validates().isString(value)) return;
				return value ? value.toLowerCase() : "";
			},
			removeNumbers: (value) => {
				if (!self.validates().isString(value)) return "";
				return value ? value.replace(/[0-9]/g, "").trim() : "";
			},
			removeCaracters: (value) => {
				if (!self.validates().isString(value)) return "";
				return value ? value.toString().replace(/\D+/g, "").trim() : "";
			},
			removeSpecialCaracters: (value) => {
				if (!self.validates().isString(value)) return;
				return value
					? value
							.normalize("NFD")
							.replace(/[\u0300-\u036f]/g, "")
							.trim()
					: "";
			},
			removeHTMLTags: (value) => {
				if (!self.validates().isString(value)) return;

				function htmlDecode(input) {
					var doc = new DOMParser().parseFromString(input, "text/html");
					return doc.documentElement.textContent;
				}

				return value ? htmlDecode(value.replace(/<[^>]*>/g, "").replace(/(\r\n|\n|\r)/gm, "")) : "";
			}
		};
	}
}
