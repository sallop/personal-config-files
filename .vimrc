set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'gmarik/Vundle.vim'

" The following are examples of different formats supported.
" Keep Plugin commands between vundle#begin/end.
" plugin on GitHub repo
Plugin 'tpope/vim-fugitive'
Plugin 'scrooloose/nerdtree'
Plugin 'scrooloose/syntastic'
Plugin 'tyru/open-browser.vim'
Plugin 'shawncplus/phpcomplete.vim'
Plugin 'violetyk/cake.vim'
Plugin 'dsawardekar/wordpress.vim'
Plugin 'leafgarland/typescript-vim'
" plugin from http://vim-scripts.org/vim/scripts.html
Plugin 'L9'
" Git plugin not hosted on GitHub
Plugin 'git://git.wincent.com/command-t.git'
" git repos on your local machine (i.e. when working on your own plugin)
" Plugin 'file:///home/gmarik/path/to/plugin'
" The sparkup vim script is in a subdirectory of this repo called vim.
" Pass the path to set the runtimepath properly.
" Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}
" Avoid a name conflict with L9
" Plugin 'user/L9', {'name': 'newL9'}

Plugin 'joonty/vdebug'
Plugin 'stephpy/vim-yaml'
Plugin 'digitaltoad/vim-jade'
Plugin 'groenewege/vim-less'

Plugin 'mxw/vim-jsx'

Plugin 'derekwyatt/vim-scala'

Plugin 'fatih/vim-go'

Plugin "scrooloose/syntastic"

Plugin "garbas/vim-snipmate"

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line

map <C-n> :NERDTreeToggle<CR>


function! Browser()
	let line = getline(".")
	let line = matchstr (line, "\%(http://www\.\)[^,;\t]*")
	exec "!firefox".line
endfunction
map <Leader>w :call Browser()<CR>

function! Firefox(uri)
		exec "!firefox\ --new-tab\ ".a:uri
endfunction

function! Meow()
		echo "Meow"
endfunction

" from python.org/moin/Vim
syntax on
filetype indent plugin on
set modeline

" indentation
" set tabstop=8
" set expandtab
" set shiftwidth=4
" set softtabstop=4
set tabstop=2
set expandtab
set shiftwidth=2
set softtabstop=2


"tyru's setting
let g:netrw_nogx=1 "disable netrw's gx mapping.
nmap gx <Plug>(openbrowser-smart-search)
vmap gx <Plug>(openbrowser-smart-search)
"Open URI under cursor
"nmap map-you-like <Plug>(openbrowser-open)
"Open selected URI
"vmap map-you-like<Plug>(openbrowser-open)

" syntastic checker
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_mode_map = { 'mode': 'passive', 'active_filetypes': [], 'passive_filetypes': [] }
let g:syntastic_use_quick_fix_lists = 1
nnoremap <C-w>E :SyntasticCheck<CR> :SyntasticToggleMode<CR>

nnoremap <F12>f :exe ':silent !firefox %'<CR>
nnoremap <F12>c :exe ':silent !google-chrome %'<CR>

let g:typescript_compiler_options = '-sourcemap'
autocmd QuickFixCmdPost [^l]* nested cwindow
autocmd QuickFixCmdPost    l* nested lwindow
