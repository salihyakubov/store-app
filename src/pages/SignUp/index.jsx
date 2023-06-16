import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <div class="min-h-screen bg-blue-400 flex justify-center items-center">
	<div class="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
	</div>
	<div class="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div>
	<div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
		<div>
			<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Создать аккаунт</h1>
			<p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Создайте учетную запись, чтобы бесплатно пользоваться всеми услугами без рекламы!</p>
		</div>
		<div class="space-y-4">
			<input type="text" placeholder="Email адрес" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
			<input type="password" placeholder="Придумайте пароль" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
    </div>
			<div class="text-center mt-6">
				<button class="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">Создать аккаунт</button>
				<p class="mt-4 text-sm">Уже есть аккаунт? <Link to='/signin' class="underline cursor-pointer"> Войти</Link>
				</p>
			</div>
		</div>
		<div class="w-40 h-40 absolute bg-blue-300 rounded-full top-0 right-12 hidden md:block"></div>
		<div
			class="w-20 h-40 absolute bg-blue-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
		</div>
	</div>
        </>
    );
};

export default SignUp;