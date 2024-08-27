var Imtech = {};
Imtech.Pager = function() {
    this.paragraphsPerPage = 3;
    this.currentPage = 1;
    this.pagingControlsContainer = '#pagingControls';
    this.pagingContainerPath = '#content';
    this.numPages = function() {
        var numPages = 0;
        if (this.paragraphs != null && this.paragraphsPerPage != null) {
            numPages = Math.ceil(this.paragraphs.length / this.paragraphsPerPage);
        }
        return numPages;
    };
    this.showPage = function(page) {
        this.currentPage = page;
        var html = '';
        this.paragraphs.slice((page-1) * this.paragraphsPerPage,
            ((page-1)*this.paragraphsPerPage) + this.paragraphsPerPage).each(function() {
            html += '<div>' + $(this).html() + '</div>';
        });
        $(this.pagingContainerPath).html(html);
        renderControls(this.pagingControlsContainer, this.currentPage, this.numPages());
    }
    var renderControls = function(container, currentPage, numPages) {
        var pagingControls = '<ul class="p-controls">';
        for (var i = 1; i <= numPages; i++) {
            if (i != currentPage) {
                pagingControls += '<li class="pg-link"><a href="#" onclick="pager.showPage(' + i + '); return false;">' + i + '</a></li>';
            } else {
                pagingControls += '<li class="active">' + i + '</li>';
            }
        }
        pagingControls += '</ul>';
        $(container).html(pagingControls);
    }
}
Imtech.Pager1 = function() {
    this.paragraphsPerPage = 3;
    this.currentPage = 1;
    this.pagingControlsContainer = '#pagingControls1';
    this.pagingContainerPath = '#content1';
    this.numPages = function() {
        var numPages = 0;
        if (this.paragraphs != null && this.paragraphsPerPage != null) {
            numPages = Math.ceil(this.paragraphs.length / this.paragraphsPerPage);
        }
        return numPages;
    };
    this.showPage = function(page) {
        this.currentPage = page;
        var html = '';
        this.paragraphs.slice((page-1) * this.paragraphsPerPage,
            ((page-1)*this.paragraphsPerPage) + this.paragraphsPerPage).each(function() {
            html += '<div>' + $(this).html() + '</div>';
        });
        $(this.pagingContainerPath).html(html);
        renderControls(this.pagingControlsContainer, this.currentPage, this.numPages());
    }
    var renderControls = function(container, currentPage, numPages) {
        var pagingControls1 = '<ul class="p-controls">';
        for (var i = 1; i <= numPages; i++) {
            if (i != currentPage) {
                pagingControls1 += '<li class="pg-link"><a href="#" onclick="pager1.showPage(' + i + '); return false;">' + i + '</a></li>';
            } else {
                pagingControls1 += '<li class="active">' + i + '</li>';
            }
        }
        pagingControls1 += '</ul>';
        $(container).html(pagingControls1);
    }
}
Imtech.Pager2 = function() {
    this.paragraphsPerPage = 3;
    this.currentPage = 1;
    this.pagingControlsContainer = '#pagingControls2';
    this.pagingContainerPath = '#content2';
    this.numPages = function() {
        var numPages = 0;
        if (this.paragraphs != null && this.paragraphsPerPage != null) {
            numPages = Math.ceil(this.paragraphs.length / this.paragraphsPerPage);
        }
        return numPages;
    };
    this.showPage = function(page) {
        this.currentPage = page;
        var html = '';
        this.paragraphs.slice((page-1) * this.paragraphsPerPage,
            ((page-1)*this.paragraphsPerPage) + this.paragraphsPerPage).each(function() {
            html += '<div>' + $(this).html() + '</div>';
        });
        $(this.pagingContainerPath).html(html);
        renderControls(this.pagingControlsContainer, this.currentPage, this.numPages());
    }
    var renderControls = function(container, currentPage, numPages) {
        var pagingControls2 = '<ul class="p-controls">';
        for (var i = 1; i <= numPages; i++) {
            if (i != currentPage) {
                pagingControls2 += '<li class="pg-link"><a href="#" onclick="pager2.showPage(' + i + '); return false;">' + i + '</a></li>';
            } else {
                pagingControls2 += '<li class="active">' + i + '</li>';
            }
        }
        pagingControls2 += '</ul>';
        $(container).html(pagingControls2);
    }
}
Imtech.Pager3 = function() {
    this.paragraphsPerPage = 3;
    this.currentPage = 1;
    this.pagingControlsContainer = '#pagingControls3';
    this.pagingContainerPath = '#content3';
    this.numPages = function() {
        var numPages = 0;
        if (this.paragraphs != null && this.paragraphsPerPage != null) {
            numPages = Math.ceil(this.paragraphs.length / this.paragraphsPerPage);
        }
        return numPages;
    };
    this.showPage = function(page) {
        this.currentPage = page;
        var html = '';
        this.paragraphs.slice((page-1) * this.paragraphsPerPage,
            ((page-1)*this.paragraphsPerPage) + this.paragraphsPerPage).each(function() {
            html += '<div>' + $(this).html() + '</div>';
        });
        $(this.pagingContainerPath).html(html);
        renderControls(this.pagingControlsContainer, this.currentPage, this.numPages());
    }
    var renderControls = function(container, currentPage, numPages) {
        var pagingControls3 = '<ul class="p-controls">';
        for (var i = 1; i <= numPages; i++) {
            if (i != currentPage) {
                pagingControls3 += '<li class="pg-link"><a href="#" onclick="pager3.showPage(' + i + '); return false;">' + i + '</a></li>';
            } else {
                pagingControls3 += '<li class="active">' + i + '</li>';
            }
        }
        pagingControls3 += '</ul>';
        $(container).html(pagingControls3);
    }
}
Imtech.Pager4 = function() {
    this.paragraphsPerPage = 3;
    this.currentPage = 1;
    this.pagingControlsContainer = '#pagingControls4';
    this.pagingContainerPath = '#content4';
    this.numPages = function() {
        var numPages = 0;
        if (this.paragraphs != null && this.paragraphsPerPage != null) {
            numPages = Math.ceil(this.paragraphs.length / this.paragraphsPerPage);
        }
        return numPages;
    };
    this.showPage = function(page) {
        this.currentPage = page;
        var html = '';
        this.paragraphs.slice((page-1) * this.paragraphsPerPage,
            ((page-1)*this.paragraphsPerPage) + this.paragraphsPerPage).each(function() {
            html += '<div>' + $(this).html() + '</div>';
        });
        $(this.pagingContainerPath).html(html);
        renderControls(this.pagingControlsContainer, this.currentPage, this.numPages());
    }
    var renderControls = function(container, currentPage, numPages) {
        var pagingControls4 = '<ul class="p-controls">';
        for (var i = 1; i <= numPages; i++) {
            if (i != currentPage) {
                pagingControls4 += '<li class="pg-link"><a href="#" onclick="pager4.showPage(' + i + '); return false;">' + i + '</a></li>';
            } else {
                pagingControls4 += '<li class="active">' + i + '</li>';
            }
        }
        pagingControls4 += '</ul>';
        $(container).html(pagingControls4);
    }
}