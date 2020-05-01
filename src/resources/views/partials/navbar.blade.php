<nav class="navbar navbar__primary is-fixed-top">
  <div class="navbar-brand">
    <a class="navbar-item" href="{{ url('/') }}">
      <strong>{{ config('app.name', 'Laravel') }}</strong>
    </a>
  </div>

  <div class="navbar-menu">
    <div class="navbar-start">

    </div>
    <div class="navbar-end">

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Settings
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            This
          </a>
          <a class="navbar-item">
            That
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            This again
          </a>
        </div>
      </div>

      @if (Auth::guest())
        <div class="navbar-item">
          Hello Guest
        </div>
      @else
      <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="#">
            {{ Arr::random(['Ciao', 'Salve', 'Pronto']) }}, {{ Auth::user()->first_name }}!
            @if(Auth::user()->is_admin)<span class="tag is-success">Admin</span>@endif
          </a>

          <div class="navbar-dropdown">
            @if(Auth::user()->is_admin)
              <a class="navbar-item" href="{{ route('admin') }}">
                Admin
              </a>
            @endif
              <a class="navbar-item" href="{{ route('logout') }}"
                 onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                  Logout
              </a>

              <form id="logout-form" action="{{ route('logout') }}" method="POST"
                  style="display: none;">
                  {{ csrf_field() }}
              </form>
          </div>
      </div>
  @endif



    </div>


</nav>
