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

      <div class="navbar-item has-dropdown is-hoverable has-dropdown-with-icons has-user-avatar"><a class="navbar-link">
          <div class="is-user-avatar"><img src="https://pbs.twimg.com/profile_images/582895958192726017/FHM-Q8qU_200x200.jpg" alt="John Doe"></div>
          <div class="is-user-name"><span>John Doe</span></div>
        </a>
        <div class="navbar-dropdown"><a class="navbar-item"><span class="icon"><i class="mdi mdi-account default"></i></span><span>My Profile</span></a>
          <a class="navbar-item"><span class="icon"><i class="mdi mdi-settings default"></i></span><span>Settings</span></a>
          <a class="navbar-item"><span class="icon"><i class="mdi mdi-email default"></i></span><span>Messages</span></a>
          <hr class="navbar-divider">
          <a class="navbar-item"><span class="icon"><i class="mdi mdi-logout default"></i></span><span>Log Out</span></a></div>
      </div>



    </div>


</nav>
